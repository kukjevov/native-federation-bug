import {DynamicMetadataLoader} from '@anglr/dynamic';
import {LayoutEditorMetadataDescriptor} from '@anglr/dynamic/layout-editor';

import {DochadzkaSubmenuComponentOptions} from './dochadzkaSubmenu.options';

/**
 * Dochadzka submenu layout metadata loader
 */
export const DochadzkaSubmenuLayoutMetadataLoader: DynamicMetadataLoader<LayoutEditorMetadataDescriptor<DochadzkaSubmenuComponentOptions>> = async () => new (await import('./metadata/dochadzkaSubmenu.layoutMetadata')).DochadzkaSubmenuLayoutEditorMetadata();
