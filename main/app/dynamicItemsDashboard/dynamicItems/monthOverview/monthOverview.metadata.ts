import {DynamicMetadataLoader} from '@anglr/dynamic';
import {LayoutEditorMetadataDescriptor} from '@anglr/dynamic/layout-editor';

import {MonthOverviewComponentOptions} from './monthOverview.options';

/**
 * Month overview layout metadata loader
 */
export const MonthOverviewLayoutMetadataLoader: DynamicMetadataLoader<LayoutEditorMetadataDescriptor<MonthOverviewComponentOptions>> = async () => new (await import('./metadata/monthOverview.layoutMetadata')).MonthOverviewLayoutEditorMetadata();
