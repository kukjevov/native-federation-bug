import {ClassProvider} from '@angular/core';
import {DynamicFeature, provideStaticPackageSource} from '@anglr/dynamic';
import {LAYOUT_COMPONENTS_MODULE_PROVIDERS} from '@anglr/dynamic/layout';
import {LAYOUT_MODULE_TYPES_PROVIDERS} from '@anglr/dynamic/layout-editor';
import {RELATIONS_COMPONENTS_MODULE_PROVIDERS} from '@anglr/dynamic/relations';
import {RELATIONS_MODULE_TYPES_PROVIDERS, RELATIONS_NODES_PROVIDERS} from '@anglr/dynamic/relations-editor';

import {DashboardDynamicModuleItemsProvider, DashboardDynamicModuleRelationsProvider, DashboardDynamicModuleTypesProvider} from './services';

/**
 * Provider for dashboard package layout components provider
 */
const DASHBOARD_LAYOUT_COMPONENTS_PROVIDER: ClassProvider =
{
    provide: LAYOUT_COMPONENTS_MODULE_PROVIDERS,
    useClass: DashboardDynamicModuleItemsProvider,
    multi: true
};

/**
 * Provider for dashboard dynamic layout module types provider
 */
const DASHBOARD_LAYOUT_MODULE_TYPES_PROVIDER: ClassProvider =
{
    provide: LAYOUT_MODULE_TYPES_PROVIDERS,
    useClass: DashboardDynamicModuleTypesProvider,
    multi: true
};

/**
 * Provider for dashboard dynamic relations types provider
 */
const DASHBOARD_RELATIONS_MODULE_TYPES_PROVIDER: ClassProvider =
{
    provide: RELATIONS_MODULE_TYPES_PROVIDERS,
    useClass: DashboardDynamicModuleRelationsProvider,
    multi: true
};

/**
 * Provider for dashboard package relations nodes provider
 */
const DASHBOARD_RELATIONS_NODES_PROVIDER: ClassProvider =
{
    provide: RELATIONS_NODES_PROVIDERS,
    useClass: DashboardDynamicModuleItemsProvider,
    multi: true
};

/**
 * Provider for dashboard package relations components provider
 */
const DASHBOARD_RELATIONS_COMPONENTS_PROVIDER: ClassProvider =
{
    provide: RELATIONS_COMPONENTS_MODULE_PROVIDERS,
    useClass: DashboardDynamicModuleItemsProvider,
    multi: true
};

/**
 * Enables use of dashboard components feature
 */
export function withDashboardComponents(): DynamicFeature
{
    return new DynamicFeature(
    {
        layoutRuntime:
        {
            prependProviders: [],
            providers: 
            [
                DASHBOARD_LAYOUT_COMPONENTS_PROVIDER,
            ],
        },
        layoutEditor:
        {
            prependProviders: [],
            providers: 
            [
                DASHBOARD_LAYOUT_MODULE_TYPES_PROVIDER,
                provideStaticPackageSource('dashboard-components'),
            ],
        },
        relationsRuntime:
        {
            prependProviders: [],
            providers: 
            [
                DASHBOARD_RELATIONS_COMPONENTS_PROVIDER,
            ],
        },
        relationsEditor:
        {
            prependProviders: [],
            providers: 
            [
                DASHBOARD_RELATIONS_MODULE_TYPES_PROVIDER,
                DASHBOARD_RELATIONS_NODES_PROVIDER,
                provideStaticPackageSource('dashboard-components'),
            ],
        },
    });
}