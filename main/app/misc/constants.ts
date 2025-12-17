import {config} from '../config';

export const NOTHING_SELECTED = 'Nothing selected';
export const DATE_FORMAT = 'yyyy-MM-dd';
export const DATE_TIME_FORMAT = 'yyyy-MM-ddTHH:mm:ss';
export const NAME_DATE_FORMAT = 'DD. MMMM YYYY (dddd)';
export const DEBUG_INFO = 'debugInfo';
export const DASHBOARD_DYNAMIC_CONTENT = 'dashboard';
export const AUTH_SCOPES = [`${config.configuration.authConfig.clientId}/API.Read`, 'Directory.Read.All'];
