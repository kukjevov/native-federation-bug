import {DynamicMetadataLoader} from '@anglr/dynamic';
import {LayoutEditorMetadataDescriptor} from '@anglr/dynamic/layout-editor';

import {UserSelectorComponentOptions} from './userSelector.options';

/**
 * User selector layout metadata loader
 */
export const UserSelectorLayoutMetadataLoader: DynamicMetadataLoader<LayoutEditorMetadataDescriptor<UserSelectorComponentOptions>> = async () => new (await import('./metadata/userSelector.layoutMetadata')).UserSelectorLayoutEditorMetadata();
