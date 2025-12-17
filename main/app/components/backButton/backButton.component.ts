import {Component, ChangeDetectionStrategy} from '@angular/core';
import {FirstUppercaseLocalizePipe, GoBackDirective, HostDisplayBlockStyle, TooltipDirective} from '@anglr/common';

/**
 * Represents back button for navigating back to previous page
 */
@Component(
{
    selector: 'back-button',
    templateUrl: 'backButton.component.html',
    styles: [HostDisplayBlockStyle],
    standalone: true,
    imports:
    [
        FirstUppercaseLocalizePipe,
        TooltipDirective,
        GoBackDirective,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BackButtonComponent
{
}