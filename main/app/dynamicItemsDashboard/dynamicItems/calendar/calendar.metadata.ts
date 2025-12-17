import {DynamicMetadataLoader} from '@anglr/dynamic';
import {LayoutEditorMetadataDescriptor} from '@anglr/dynamic/layout-editor';

import {CalendarComponentOptions} from './calendar.options';

/**
 * Calendar layout metadata loader
 */
export const CalendarLayoutMetadataLoader: DynamicMetadataLoader<LayoutEditorMetadataDescriptor<CalendarComponentOptions>> = async () => new (await import('./metadata/calendar.layoutMetadata')).CalendarLayoutEditorMetadata();
