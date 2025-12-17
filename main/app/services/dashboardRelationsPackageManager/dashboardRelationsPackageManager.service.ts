import {Injectable} from '@angular/core';
import {PackageManager} from '@anglr/dynamic';

/**
 * Relations package manager for dashboard page
 */
@Injectable()
export class DashboardRelationsPackageManager extends PackageManager
{
    //######################### constructor #########################
    constructor()
    {
        super('DASHBOARD_RELATIONS_PACKAGES_STORE');
    }
}