import {ComponentStylingModel, ComponentStylingPropertiesControlComponent, LayoutEditorMetadataDescriptor, LayoutEditorMetadataInfo} from '@anglr/dynamic/layout-editor';

import {UserInfoComponentOptions} from '../userInfo.options';
import {UserInfoPropertiesControlComponent} from '../misc/component';
import {UserInfoModel} from './userInfo.model';

/**
 * User info layout metadata
 */
export class UserInfoLayoutEditorMetadata implements LayoutEditorMetadataDescriptor<UserInfoComponentOptions>
{
    //######################### public properties - implementation of LayoutEditorMetadataDescriptor #########################

    /**
     * @inheritdoc
     */
    public metaInfo?: LayoutEditorMetadataInfo<UserInfoComponentOptions> =
    {
        name: 'User info',
        description: 'Information about user',
        group: 'Dashboard',
        optionsMetadata:
        {
            propertiesMetadata:
            [
                {
                    modelType: ComponentStylingModel,
                    propertiesControls:
                    [
                        ComponentStylingPropertiesControlComponent,
                    ],
                },
                {
                    modelType: UserInfoModel,
                    propertiesControls:
                    [
                        UserInfoPropertiesControlComponent,
                    ],
                }
            ]
        },
        defaultOptions:
        {
            personalNumber: true,
            name: true,
            workingShiftType: true,
            workingHours: true,
            status: true,
            finishedHours: true,
            loggedHours: true,
            nominalFond: true,
            aberration: true,
            mealTickets: true,
            vaccationRemaining: true,
            vaccationHalfDaySpent: true,
            sickDaysSpent: true,
            EHOSpent: true,
            divisionShortcut: true,
            department: true,
        },
    };

    //######################### constructor #########################
    constructor()
    {
        Object.freeze(this);
    }
}