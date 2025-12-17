import {Inject, Injectable, Optional} from '@angular/core';
import {Logger, LOGGER} from '@anglr/common';
import {DynamicItemSource, DynamicModule, DynamicModuleProvider} from '@anglr/dynamic';

/**
 * Dynamic module types provider, for dashboard types
 */
@Injectable()
export class DashboardDynamicModuleTypesProvider implements DynamicModuleProvider
{
    //######################### constructor #########################
    constructor(@Inject(LOGGER) @Optional() protected _logger?: Logger,)
    {
    }

    //######################### public methods - implementation of DynamicItemLoaderProvider #########################

    /**
     * @inheritdoc
     */
    public async tryToGet(source: DynamicItemSource): Promise<DynamicModule|null>
    {
        try
        {
            this._logger?.debug('DashboardDynamicModuleTypesProvider: trying to get types for module {{@module}}', {moduleName: source.package});

            switch(source.package)
            {
                case 'dashboard-components':
                    return await import('../../types');
                default:
                    return null;
            }
        }
        catch(e)
        {
            this._logger?.debug('DashboardDynamicModuleTypesProvider: module {{@module}} was not found, reason: ' + e, {moduleName: source.package});
        }

        return null;
    }
}