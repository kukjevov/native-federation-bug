import {DynamicMetadataLoader} from '@anglr/dynamic';
import {LayoutEditorMetadataDescriptor} from '@anglr/dynamic/layout-editor';

import {MonthSelectorComponentOptions} from './monthSelector.options';

/**
 * Month selector layout metadata loader
 */
export const MonthSelectorLayoutMetadataLoader: DynamicMetadataLoader<LayoutEditorMetadataDescriptor<MonthSelectorComponentOptions>> = async () => new (await import('./metadata/monthSelector.layoutMetadata')).MonthSelectorLayoutEditorMetadata();
