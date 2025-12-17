import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {AccessToken, AuthenticationServiceOptions, UserIdentity} from '@anglr/authentication';
import {Dictionary} from '@jscrpt/common';
import {InteractionRequiredAuthError, PublicClientApplication} from '@azure/msal-browser';
import {EMPTY, NEVER, Observable} from 'rxjs';

import permissions from '../../../../config/permissions.json';
import {AUTH_SCOPES} from '../../../misc/constants';
import {testValidAccount} from './utils';
import {MsalAccessToken} from './account.interface';

/**
 * Class represents authentication service options for account
 */
@Injectable()
export class AccountAuthOptions extends AuthenticationServiceOptions
{
    //######################### private fields #########################

    /**
     * Computed permissions for roles
     */
    private _permissions: Dictionary<string[]>|undefined|null;

    //######################### private properties #########################

    /**
     * Gets computed permissions for roles
     */
    private get permissions(): Dictionary<string[]>
    {
        return this._permissions ??= this._computePermissionsForRoles();
    }

    //######################### constructor #########################
    constructor(private _router: Router,
                private _authInstance: PublicClientApplication,)
    {
        super();
    }

    //######################### public methods - implementation of AuthenticationServiceOptions #########################

    /**
     * @inheritdoc
     */
    public login(_accessToken: AccessToken): Observable<void>
    {
        return EMPTY;
    }

    /**
     * @inheritdoc
     */
    public isAuthPage(_path?: string): boolean
    {
        return false;
    }

    /**
     * @inheritdoc
     */
    public logout(): Observable<void>
    {
        this._authInstance
            .logoutRedirect()
            .then(() =>
            {
                this._authInstance.clearCache();
            })
            .catch(() =>
            {
                this._authInstance.clearCache();
                window.location.href = '/';
            });

        return NEVER;
    }

    /**
     * @inheritdoc
     */
    public getUserIdentity(): Observable<UserIdentity>
    {
        return new Observable(subscriber =>
        {
            (async () =>
            {
                const scopes: string[] = AUTH_SCOPES;

                try
                {
                    const [account] = this._authInstance.getAllAccounts();
                    let accessToken: MsalAccessToken;

                    if(!account)
                    {
                        await this._authInstance.loginRedirect(
                        {
                            scopes,
                            prompt: 'select_account',
                        });

                        return;
                    }
                    //cache contains token revalidate
                    else
                    {
                        //use cache instead of live revalidation, for FF developer
                        const authResult = await this._authInstance.acquireTokenSilent(
                        {
                            account,
                            scopes,
                        });

                        const [,userData,] = authResult.accessToken.split('.');
                        accessToken = JSON.parse(atob(userData));
                    }

                    const roles = [];

                    if(testValidAccount(account))
                    {
                        roles.push('USER');
                    }

                    const privileges = this._roles2privileges(roles);

                    subscriber.next(
                    {
                        isAuthenticated: true,
                        userName: account.username,
                        firstName: accessToken.given_name ?? '',
                        surname: accessToken.family_name ?? '',
                        permissions: !privileges.length ? ['anonymous'] : privileges.concat(['authenticated']),
                        additionalInfo:
                        {
                            id: account.localAccountId,
                        },
                    });

                    subscriber.complete();
                }
                catch(e)
                {
                    if(e instanceof InteractionRequiredAuthError)
                    {
                        await this._authInstance.loginRedirect(
                        {
                            scopes,
                            prompt: 'select_account',
                        });

                        return;
                    }

                    console.log('error', e);
                }
            })();
        });
    }

    /**
     * @inheritdoc
     */
    public async showAuthPage(): Promise<boolean>
    {
        await this._authInstance.loginRedirect(
        {
            scopes: AUTH_SCOPES,
            prompt: 'select_account',
        });

        return true;
    }

    /**
     * @inheritdoc
     */
    public showAccessDenied(): Promise<boolean>
    {
        return this._router.navigate(['/accessDenied']);
    }

    //######################### private methods #########################

    /**
     * Gets array of permissions for provided roles
     * @param roles Array of roles to be transformed to permissions
     */
    private _roles2privileges(roles: string[]): string[]
    {
        const perms: {[permission: string]: boolean} = {};

        (roles ?? []).forEach(role => (this.permissions[role] ?? []).forEach(permission => perms[permission] = true));

        return Object.keys(perms);
    }

    /**
     * Computes permissions for roles
     */
    private _computePermissionsForRoles(): Dictionary<string[]>
    {
        const computedPermissions: Dictionary<string[]> = {};

        Object.keys(permissions).forEach(permission =>
        {
            const roles = (permissions as Dictionary)[permission];

            if(Array.isArray(roles))
            {
                roles.forEach(role =>
                {
                    computedPermissions[role] ??= [];
                    computedPermissions[role].push(permission);
                });
            }
        });

        return computedPermissions;
    }
}
