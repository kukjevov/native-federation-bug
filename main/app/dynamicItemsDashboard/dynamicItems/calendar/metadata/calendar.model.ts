import {mapValuesToThis} from '@jscrpt/common';

import {CalendarComponentOptions} from '../calendar.options';

/**
 * Calendar model for properties editor
 */
export class CalendarModel implements CalendarComponentOptions
{
    //######################### constructor #########################
    constructor(value: CalendarComponentOptions|undefined|null)
    {
        mapValuesToThis.bind(this)(value);
    }
}