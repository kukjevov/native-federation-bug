import {inject} from '@angular/core';
import {lastValueFrom} from '@jscrpt/common/rxjs';

import {DynamicContentResponse, DynamicContentService} from '../../../services/api/dynamicContent';
import {DASHBOARD_DYNAMIC_CONTENT} from '../../../misc/constants';

/**
 * Resolver that obtains data for home component
 */
export async function homeResolver(): Promise<DynamicContentResponse>
{
    const dynamicContentSvc = inject(DynamicContentService);

    return await lastValueFrom(dynamicContentSvc.getDynamicContent(DASHBOARD_DYNAMIC_CONTENT));
}