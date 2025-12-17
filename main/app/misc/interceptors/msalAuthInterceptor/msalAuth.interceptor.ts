import {inject} from '@angular/core';
import {HttpEvent, HttpRequest, HttpHandlerFn} from '@angular/common/http';
import {IGNORED_INTERCEPTORS} from '@anglr/common';
import {AuthenticationResult, InteractionRequiredAuthError, PublicClientApplication} from '@azure/msal-browser';
import {Observable} from 'rxjs';

import {AUTH_SCOPES} from '../../constants';

/**
 * Auth interceptor used for intercepting http requests and adding access token to request
 * @param req - Request to be intercepted
 * @param next - Next function for passing request to next interceptor
 */
export function msalAuthInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>>
{
    const authInstance = inject(PublicClientApplication);
    const [account] = authInstance.getAllAccounts();
    const scopes = AUTH_SCOPES;

    if(!account)
    {
        throw new Error('authInterceptor: missing account!');
    }

    return new Observable(observer =>
    {
        (async () =>
        {
            //interceptor is not ignored
            if(!req.context.get(IGNORED_INTERCEPTORS).some(itm => itm == msalAuthInterceptor))
            {
                let authResult: AuthenticationResult;

                try
                {
                    //use cache instead of live revalidation, for FF developer
                    authResult = await authInstance.acquireTokenSilent(
                    {
                        account,
                        scopes,
                    });
                }
                catch(e)
                {
                    if(e instanceof InteractionRequiredAuthError)
                    {
                        await authInstance.loginRedirect(
                        {
                            scopes,
                            prompt: 'select_account',
                        });

                        return;
                    }

                    throw e;
                }

                req = req.clone(
                {
                    setHeaders:
                    {
                        Authorization: `Bearer ${authResult.accessToken}`,
                    },
                });
            }

            return next(req).subscribe(observer);
        })();
    });
}
