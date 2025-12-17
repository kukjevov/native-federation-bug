import {Component, ChangeDetectionStrategy, WritableSignal, signal} from '@angular/core';
import {RouterLink} from '@angular/router';
import {AuthenticationService, AuthorizeDirective} from '@anglr/authentication';
import {TitledDialogService} from '@anglr/common/material';
import {LocalizePipe} from '@anglr/common';

import {UserSettingsComponent} from '../../../../components';
import {VersionUpdateService} from '../../../../services/versionUpdate';

/**
 * Component used for displaying application main menu
 */
@Component(
{
    selector: 'main-menu',
    templateUrl: 'mainMenu.component.html',
    standalone: true,
    imports:
    [
        AuthorizeDirective,
        LocalizePipe,
        RouterLink,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainMenuComponent
{
    //######################### protected properties - template bindings #########################

    /**
     * Username of logged user
     */
    protected username: WritableSignal<string>;

    //######################### constructor #########################
    constructor(authSvc: AuthenticationService,
                private _dialog: TitledDialogService,
                protected versionUpdateSvc: VersionUpdateService,)
    {
        this.username = signal(`${authSvc.userIdentity?.userName}`);
    }

    //######################### public methods - template bindings #########################

    /**
     * Opens settings dialog
     */
    public openSettings()
    {
        this._dialog.open(UserSettingsComponent,
        {
            title: 'user settings',
            maxHeight: '80vh'
        });
    }
}