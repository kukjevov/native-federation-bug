import {Inject, Injectable, Optional} from '@angular/core';
import {DynamicItemSource, DynamicModule, DynamicModuleProvider} from '@anglr/dynamic';
import {Logger, LOGGER} from '@anglr/common';

/**
 * Dynamic module items provider for dashboard module items
 */
@Injectable()
export class DashboardDynamicModuleItemsProvider implements DynamicModuleProvider
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
        switch(source.package)
        {
            case 'dashboard-components':
            {
                try
                {
                    this._logger?.debug('DashboardDynamicModuleItemsProvider: trying to get item {{@item}}', {name: source.name, package: source.package});

                    const dynamicItemModule = await import(`../../dynamicItems/${source.name}/type.ts`);

                    return dynamicItemModule;
                }
                catch(e)
                {
                    this._logger?.debug('DashboardDynamicModuleItemsProvider: item {{@item}} was not found, reason: ' + e, {name: source.name, package: source.package});
                }

                break;
            }
            default:
            {
                return null;
            }
        }

        return null;
    }
}