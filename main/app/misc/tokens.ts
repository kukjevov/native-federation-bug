import {InjectionToken} from '@angular/core';
import {PublicClientApplication} from '@azure/msal-browser';

import {SettingsStorage} from '../services/settings';

/**
 * Token used for settings storage
 */
export const SETTINGS_STORAGE: InjectionToken<SettingsStorage> = new InjectionToken<SettingsStorage>('SETTINGS_STORAGE');

/**
 * Token used for injecting auth instance wrapper
 */
export const AUTH_INSTANCE_WRAPPER: InjectionToken<{instance: PublicClientApplication}> = new InjectionToken<{instance: PublicClientApplication}>('AUTH_INSTANCE_WRAPPER');
