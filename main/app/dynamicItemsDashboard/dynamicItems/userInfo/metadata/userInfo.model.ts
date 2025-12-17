import {mapValuesToThis} from '@jscrpt/common';

import {UserInfoComponentOptions} from '../userInfo.options';

/**
 * User info model for properties editor
 */
export class UserInfoModel implements UserInfoComponentOptions
{
    //######################### public properties - implementation of UserInfoComponentOptions #########################
    
    /**
     * @inheritdoc
     */
    public personalNumber: boolean = true;

    /**
     * @inheritdoc
     */
    public name: boolean = true;

    /**
     * @inheritdoc
     */
    public workingShiftType: boolean = true;

    /**
     * @inheritdoc
     */
    public workingHours: boolean = true;

    /**
     * @inheritdoc
     */
    public status: boolean = true;

    /**
     * @inheritdoc
     */
    public finishedHours: boolean = true;

    /**
     * @inheritdoc
     */
    public loggedHours: boolean = true;

    /**
     * @inheritdoc
     */
    public nominalFond: boolean = true;

    /**
     * @inheritdoc
     */
    public aberration: boolean = true;

    /**
     * @inheritdoc
     */
    public mealTickets: boolean = true;

    /**
     * @inheritdoc
     */
    public vaccationRemaining: boolean = true;

    /**
     * @inheritdoc
     */
    public vaccationHalfDaySpent: boolean = true;

    /**
     * @inheritdoc
     */
    public sickDaysSpent: boolean = true;

    /**
     * @inheritdoc
     */
    public EHOSpent: boolean = true;

    /**
     * @inheritdoc
     */
    public divisionShortcut: boolean = true;

    /**
     * @inheritdoc
     */
    public department: boolean = true;

    //######################### constructor #########################
    constructor(value: UserInfoComponentOptions|undefined|null)
    {
        mapValuesToThis.bind(this)(value);
    }
}