/**
 * Options for user info component
 */
export interface UserInfoComponentOptions
{
    /**
     * Indication whether display 'osobné číslo'
     */
    personalNumber: boolean;

    /**
     * Indication whether display 'meno'
     */
    name: boolean;

    /**
     * Indication whether display 'pracovná doba'
     */
    workingShiftType: boolean;

    /**
     * Indication whether display 'dĺžka prac. doby'
     */
    workingHours: boolean;

    /**
     * Indication whether display 'stav'
     */
    status: boolean;

    /**
     * Indication whether display 'odprac. hodiny'
     */
    finishedHours: boolean;

    /**
     * Indication whether display 'evid. hodiny'
     */
    loggedHours: boolean;

    /**
     * Indication whether display 'nominálny fond'
     */
    nominalFond: boolean;

    /**
     * Indication whether display 'odchýlka'
     */
    aberration: boolean;

    /**
     * Indication whether display 'stravné lístky'
     */
    mealTickets: boolean;

    /**
     * Indication whether display 'dovolenka zost.'
     */
    vaccationRemaining: boolean;

    /**
     * Indication whether display 'dovolenka 1/2 dňa minutá'
     */
    vaccationHalfDaySpent: boolean;

    /**
     * Indication whether display 'sick days minuté'
     */
    sickDaysSpent: boolean;

    /**
     * Indication whether display 'E-HO minuté'
     */
    EHOSpent: boolean;

    /**
     * Indication whether display 'divízia(skratka)'
     */
    divisionShortcut: boolean;

    /**
     * Indication whether display 'útvar'
     */
    department: boolean;
}