import {Component, ChangeDetectionStrategy, input, InputSignal} from '@angular/core';
import {FirstUppercaseLocalizePipe, NumeralPipe, TooltipDirective} from '@anglr/common';
import {ConfirmationDialogDirective, TitledDialogService} from '@anglr/common/material';
import {CalendarDayData} from '@anglr/datetime';

import {AppInputDateTime} from '../../../../../../misc/types';
import {DayEvent} from '../../../../../../services/api/dochadzka';
import {EditIntervalDialogComponent} from '../../../../../../components';

/**
 * Component used for displaying single day for 'dochadzka'
 */
@Component(
{
    selector: 'dochadzka-day',
    templateUrl: 'dochadzkaDay.component.html',
    styleUrl: 'dochadzkaDay.component.scss',
    standalone: true,
    imports:
    [
        FirstUppercaseLocalizePipe,
        ConfirmationDialogDirective,
        TooltipDirective,
        NumeralPipe,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DochadzkaDayComponent
{
    //######################### public properties - inputs #########################

    /**
     * Data that should be displayed for day
     */
    public data: InputSignal<CalendarDayData<AppInputDateTime, DayEvent>> = input.required();

    //######################### constructor #########################
    constructor(private _dialogSvc: TitledDialogService,)
    {
    }

    //######################### protected methods #########################

    /**
     * Opens dialog for editation of intervals
     */
    protected async showEditDialog(): Promise<void>
    {
        this._dialogSvc.open<EditIntervalDialogComponent>(EditIntervalDialogComponent,
        {
            title: 'úprava intervalu',
            width: '66vw',
        });
    }
}