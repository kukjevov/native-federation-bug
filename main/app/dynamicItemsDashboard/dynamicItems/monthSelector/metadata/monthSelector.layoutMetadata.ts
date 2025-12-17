import {ComponentStylingModel, ComponentStylingPropertiesControlComponent, LayoutEditorMetadataDescriptor, LayoutEditorMetadataInfo} from '@anglr/dynamic/layout-editor';

import {MonthSelectorComponentOptions} from '../monthSelector.options';

/**
 * Month selector layout metadata
 */
export class MonthSelectorLayoutEditorMetadata implements LayoutEditorMetadataDescriptor<MonthSelectorComponentOptions>
{
    //######################### public properties - implementation of LayoutEditorMetadataDescriptor #########################

    /**
     * @inheritdoc
     */
    public metaInfo?: LayoutEditorMetadataInfo<MonthSelectorComponentOptions> =
    {
        name: 'Month selector',
        description: 'Allows selection of months to be displayed',
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
            ]
        },
    };

    //######################### constructor #########################
    constructor()
    {
        Object.freeze(this);
    }
}