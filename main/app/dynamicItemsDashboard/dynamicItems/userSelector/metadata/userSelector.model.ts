import {mapValuesToThis} from '@jscrpt/common';

import {UserSelectorComponentOptions} from '../userSelector.options';

/**
 * User selector model for properties editor
 */
export class UserSelectorModel implements UserSelectorComponentOptions
{
    //######################### constructor #########################
    constructor(value: UserSelectorComponentOptions|undefined|null)
    {
        mapValuesToThis.bind(this)(value);
    }
}