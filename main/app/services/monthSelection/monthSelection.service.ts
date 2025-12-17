import {Inject, Injectable, Signal, signal, WritableSignal} from '@angular/core';
import {DATE_API, DateApi} from '@anglr/datetime';

import {AppDateTime} from '../../misc/types';

/**
 * Service used for selection of month
 */
@Injectable()
export class MonthSelectionService
{
    //######################### private fields #########################

    /**
     * Value of currently selected month
     */
    private _selectedMonth: WritableSignal<AppDateTime>;

    //######################### public properties #########################

    /**
     * Currently selected month
     */
    public get selectedMonth(): Signal<AppDateTime>
    {
        return this._selectedMonth.asReadonly();
    }

    //######################### constructor #########################
    constructor(@Inject(DATE_API) dateApi: DateApi<AppDateTime>)
    {
        this._selectedMonth = signal(dateApi.now().startOfMonth().value);
    }

    //######################### public methods #########################
    
    /**
     * Sets currently selected month
     * @param selectedMonth - Month to be selected
     */
    public setSelectedMonth(selectedMonth: AppDateTime): void
    {
        this._selectedMonth.set(selectedMonth);
    }
}