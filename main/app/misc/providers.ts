import {FactoryProvider, inject} from '@angular/core';
import {PERMANENT_STORAGE} from '@anglr/common';

import {StoreDataService} from '../services/storeData';

/**
 * Provides store data service with specific store name
 * @param storeName - Name of storage that should be used
 */
export function provideStoreData(storeName: string): FactoryProvider
{
    return {
        provide: StoreDataService,
        useFactory: () => new StoreDataService(inject(PERMANENT_STORAGE), storeName),
    };
}
