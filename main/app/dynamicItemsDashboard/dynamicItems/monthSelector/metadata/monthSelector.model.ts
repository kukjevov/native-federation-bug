import {mapValuesToThis} from '@jscrpt/common';

import {MonthSelectorComponentOptions} from '../monthSelector.options';

/**
 * Month selector model for properties editor
 */
export class MonthSelectorModel implements MonthSelectorComponentOptions
{
    //######################### constructor #########################
    constructor(value: MonthSelectorComponentOptions|undefined|null)
    {
        mapValuesToThis.bind(this)(value);
    }
}