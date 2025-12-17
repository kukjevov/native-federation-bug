import {ComponentStylingModel, ComponentStylingPropertiesControlComponent, LayoutEditorMetadataDescriptor, LayoutEditorMetadataInfo} from '@anglr/dynamic/layout-editor';

import {DochadzkaSubmenuComponentOptions} from '../dochadzkaSubmenu.options';

/**
 * Dohadzka submenu layout metadata
 */
export class DochadzkaSubmenuLayoutEditorMetadata implements LayoutEditorMetadataDescriptor<DochadzkaSubmenuComponentOptions>
{
    //######################### public properties - implementation of LayoutEditorMetadataDescriptor #########################

    /**
     * @inheritdoc
     */
    public metaInfo?: LayoutEditorMetadataInfo<DochadzkaSubmenuComponentOptions> =
    {
        name: 'Dochadzka submenu',
        description: 'Navigation buttons for dochadzka submenu',
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