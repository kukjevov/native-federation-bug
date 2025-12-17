import {Directive, forwardRef, ValueProvider} from '@angular/core';
import {CalendarDayTemplateContext, CalendarDayTemplateDirective} from '@anglr/datetime';

import {AppInputDateTime} from '../../../../../../misc/types';
import {DayEvent} from '../../../../../../services/api/dochadzka';

/**
 * Directive used for obtaining dochadzka calendar day template
 */
@Directive(
{
    selector: '[dochadzkaCalendarDayTemplate]',
    standalone: true,
    providers:
    [
        <ValueProvider>
        {
            provide: CalendarDayTemplateDirective,
            useValue: forwardRef(() => DochadzkaCalendarDayTemplateDirective),
        }
    ]
})
export class DochadzkaCalendarDayTemplateDirective extends CalendarDayTemplateDirective<AppInputDateTime, DayEvent>
{
    //######################### ng language server #########################
    
    /**
     * Allows typechecking for template
     */
    static override ngTemplateContextGuard(_dir: CalendarDayTemplateDirective, _ctx: unknown): _ctx is CalendarDayTemplateContext<AppInputDateTime, DayEvent>
    {
        return true;
    }
}