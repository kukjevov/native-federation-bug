import {LayoutComponentMetadata} from '@anglr/dynamic/layout';
import {RelationsNodeMetadata} from '@anglr/dynamic/relations-editor';

/**
 * Represents both layout and relations metadata for dynamic item
 */
export interface LayoutRelationsMetadata
{
    /**
     * Layout metadata for dynamic item
     */
    layout?: LayoutComponentMetadata;
    
    /**
     * Relations for dynamic item
     */
    relations?: RelationsNodeMetadata[];
}