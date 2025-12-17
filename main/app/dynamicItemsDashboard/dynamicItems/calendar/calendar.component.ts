import {Component, ChangeDetectionStrategy, inject} from '@angular/core';
import {HostDisplayBlockStyle} from '@anglr/common';
import {LayoutComponent, LayoutComponentBase} from '@anglr/dynamic/layout';
import {LayoutEditorMetadata} from '@anglr/dynamic/layout-editor';
import {MonthCalendarModule} from '@anglr/datetime';

import {CalendarComponentOptions} from './calendar.options';
import {CalendarLayoutMetadataLoader} from './calendar.metadata';
import {DochadzkaDayComponent} from './misc/components';
import {DochadzkaCalendarDayTemplateDirective} from './misc/directives';
import {MonthSelectionService} from '../../../services/monthSelection';

/**
 * Component used for displaying calendar
 */
@Component(
{
    selector: 'calendar',
    templateUrl: 'calendar.component.html',
    styles: [HostDisplayBlockStyle],
    standalone: true,
    imports:
    [
        DochadzkaCalendarDayTemplateDirective,
        DochadzkaDayComponent,
        MonthCalendarModule,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
@LayoutEditorMetadata(CalendarLayoutMetadataLoader)
export class CalendarComponent extends LayoutComponentBase<CalendarComponentOptions> implements LayoutComponent<CalendarComponentOptions>
{
    //######################### protected properties - template bindings #########################

    /**
     * Service used or obtaining month selection
     */
    protected monthSelection: MonthSelectionService = inject(MonthSelectionService);
}