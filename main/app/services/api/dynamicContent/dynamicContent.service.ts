import {Injectable} from '@angular/core';
import {RESTClient, GET, BaseUrl, DefaultHeaders, Path, JsonContentType, POST, Body} from '@anglr/rest';
import {LayoutComponentMetadata} from '@anglr/dynamic/layout';
import {NEVER, Observable} from 'rxjs';

import {config} from '../../../config';
import {DynamicContentResponse} from './dynamicContent.interface';

/**
 * Service used for accessing dynamic content API
 */
@Injectable()
@BaseUrl(`${config.configuration.apiBaseUrl}dynamicContent`)
@DefaultHeaders(config.configuration.defaultApiHeaders)
export class DynamicContentService extends RESTClient
{
    //######################### public methods #########################

    /**
     * Gets dynamic content by its name for user
     */
    @GET('/{name}')
    public getDynamicContent(@Path('name') _name: string): Observable<DynamicContentResponse>
    {
        return NEVER;
    }

    /**
     * Creates or updates dynamic content for user
     */
    @JsonContentType()
    @POST('/{name}')
    public setDynamicContent(@Path('name') _name: string,
                             @Body _layout: LayoutComponentMetadata,): Observable<void>
    {
        return NEVER;
    }
}