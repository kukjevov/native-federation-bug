import {ComponentStylingModel, ComponentStylingPropertiesControlComponent, LayoutEditorMetadataDescriptor, LayoutEditorMetadataInfo} from '@anglr/dynamic/layout-editor';

import {MonthOverviewComponentOptions} from '../monthOverview.options';

/**
 * Month overview layout metadata
 */
export class MonthOverviewLayoutEditorMetadata implements LayoutEditorMetadataDescriptor<MonthOverviewComponentOptions>
{
    //######################### public properties - implementation of LayoutEditorMetadataDescriptor #########################

    /**
     * @inheritdoc
     */
    public metaInfo?: LayoutEditorMetadataInfo<MonthOverviewComponentOptions> =
    {
        name: 'Month overview',
        description: 'Monthly overview of intervals, hours, remaining',
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