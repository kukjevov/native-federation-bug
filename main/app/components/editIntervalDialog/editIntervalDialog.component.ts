import {Component, ChangeDetectionStrategy, WritableSignal, signal} from '@angular/core';
import {FirstUppercaseLocalizePipe} from '@anglr/common';

/**
 * Component used for displaying edit interval dialog
 */
@Component(
{
    selector: 'edit-interval-dialog',
    templateUrl: 'editIntervalDialog.component.html',
    styleUrl: 'editIntervalDialog.component.scss',
    standalone: true,
    imports:
    [
        FirstUppercaseLocalizePipe,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditIntervalDialogComponent
{
    //######################### protected properties - template bindings #########################

    /**
     * Indication whether use hourly or daily intervals
     */
    protected hourly: WritableSignal<boolean> = signal(true);
}