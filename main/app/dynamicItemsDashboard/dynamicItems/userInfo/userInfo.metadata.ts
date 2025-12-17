import {DynamicMetadataLoader} from '@anglr/dynamic';
import {LayoutEditorMetadataDescriptor} from '@anglr/dynamic/layout-editor';

import {UserInfoComponentOptions} from './userInfo.options';

/**
 * User info layout metadata loader
 */
export const UserInfoLayoutMetadataLoader: DynamicMetadataLoader<LayoutEditorMetadataDescriptor<UserInfoComponentOptions>> = async () => new (await import('./metadata/userInfo.layoutMetadata')).UserInfoLayoutEditorMetadata();
