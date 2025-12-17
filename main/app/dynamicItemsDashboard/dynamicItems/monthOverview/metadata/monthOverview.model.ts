import {mapValuesToThis} from '@jscrpt/common';

import {MonthOverviewComponentOptions} from '../monthOverview.options';

/**
 * Month overview model for properties editor
 */
export class MonthOverviewModel implements MonthOverviewComponentOptions
{
    //######################### constructor #########################
    constructor(value: MonthOverviewComponentOptions|undefined|null)
    {
        mapValuesToThis.bind(this)(value);
    }
}