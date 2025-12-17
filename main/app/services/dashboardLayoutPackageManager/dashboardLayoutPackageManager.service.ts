import {Injectable} from '@angular/core';
import {PackageManager} from '@anglr/dynamic';

/**
 * Layout package manager for dashboard page
 */
@Injectable()
export class DashboardLayoutPackageManager extends PackageManager
{
    //######################### constructor #########################
    constructor()
    {
        super('DASHBOARD_LAYOUT_PACKAGES_STORE');
    }
}