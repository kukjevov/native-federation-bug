import {mapValuesToThis} from '@jscrpt/common';

import {DochadzkaSubmenuComponentOptions} from '../dochadzkaSubmenu.options';

/**
 * Dochadzka submenu model for properties editor
 */
export class DochadzkaSubmenuComponentModel implements DochadzkaSubmenuComponentOptions
{
    //######################### constructor #########################
    constructor(value: DochadzkaSubmenuComponentOptions|undefined|null)
    {
        mapValuesToThis.bind(this)(value);
    }
}