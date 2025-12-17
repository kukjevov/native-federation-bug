import {Component, ChangeDetectionStrategy} from '@angular/core';
import {Authorize, ComponentRouteAuthorized} from '@anglr/authentication';
import {FirstUppercaseLocalizePipe, WithPageContentCssClass} from '@anglr/common';
import {PublicClientApplication} from '@azure/msal-browser';

import {AnimateRouteDirective} from '../../../directives';
import {config} from '../../../config';
import {AUTH_SCOPES} from '../../../misc/constants';

/**
 * Page containing login form
 */
@Component(
{
    selector: 'login-view',
    templateUrl: 'login.component.html',
    host:
    {
        '[class.justify-content-center]': 'true',
    },
    imports:
    [
        FirstUppercaseLocalizePipe,
    ],
    hostDirectives:
    [
        AnimateRouteDirective,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
@ComponentRouteAuthorized({path: 'login'})
@Authorize('anonymous')
@WithPageContentCssClass()
export class LoginComponent
{
    //######################### protected properties - template bindings #########################

    /**
     * Information about allowed domain
     */
    protected authDomain = {authDomain: config.configuration.authConfig.authDomain};

    //######################### constructor #########################
    constructor(private _authInstance: PublicClientApplication,)
    {
    }

    //######################### protected methods - template bindings #########################

    /**
     * Logs in as different user
     */
    protected async logInAsDifferentUser(): Promise<void>
    {
        await this._authInstance.loginRedirect(
        {
            scopes: AUTH_SCOPES,
            prompt: 'select_account',
        });
    }
}
