import {Component, ChangeDetectionStrategy, inject} from '@angular/core';
import {FormControl} from '@angular/forms';
import {FirstUppercaseLocalizePipe, HostDisplayBlockStyle} from '@anglr/common';
import {LayoutComponent, LayoutComponentBase} from '@anglr/dynamic/layout';
import {LayoutEditorMetadata} from '@anglr/dynamic/layout-editor';
import {DATE_API, DateApi} from '@anglr/datetime';

import {UserInfoComponentOptions} from './userInfo.options';
import {UserInfoLayoutMetadataLoader} from './userInfo.metadata';
import {MonthSelectionService} from '../../../services/monthSelection';
import {AppDateTime} from '../../../misc/types';

/**
 * Component used for displaying user info
 */
@Component(
{
    selector: 'user-info',
    templateUrl: 'userInfo.component.html',
    styleUrl: 'userInfo.component.scss',
    styles: [HostDisplayBlockStyle],
    standalone: true,
    imports:
    [
        FirstUppercaseLocalizePipe,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
@LayoutEditorMetadata(UserInfoLayoutMetadataLoader)
export class UserInfoComponent extends LayoutComponentBase<UserInfoComponentOptions> implements LayoutComponent<UserInfoComponentOptions>
{
    //######################### private fields #########################

    /**
     * Service used for sharing month selection
     */
    private _selectedMonth: MonthSelectionService = inject(MonthSelectionService);

    /**
     * Instance of date api for manipulation with date
     */
    private _dateApi: DateApi<AppDateTime> = inject<DateApi<AppDateTime>>(DATE_API);

    //######################### protected properties - template bindings #########################

    /**
     * Form control attached to selected month
     */
    protected selectedMonth: FormControl<AppDateTime> = new FormControl<AppDateTime>(this._selectedMonth.selectedMonth(), {nonNullable: true});

    //######################### constructor #########################
    constructor()
    {
        super();

        this.selectedMonth.valueChanges.subscribe(value => this._selectedMonth.setSelectedMonth(value));
    }

    //######################### protected methods - template bindings #########################

    /**
     * Changes currently selected month to next month
     */
    protected nextMonth(): void
    {
        const currentMonth = this._dateApi.getValue(this._selectedMonth.selectedMonth());

        currentMonth.addMonths();

        this.selectedMonth.setValue(currentMonth.value);
        this._selectedMonth.setSelectedMonth(currentMonth.value);
    }

    /**
     * Changes currently selected month to previous month
     */
    protected previousMonth(): void
    {
        const currentMonth = this._dateApi.getValue(this._selectedMonth.selectedMonth());

        currentMonth.subtractMonths();

        this.selectedMonth.setValue(currentMonth.value);
        this._selectedMonth.setSelectedMonth(currentMonth.value);
    }
}