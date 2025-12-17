import {AccountInfo} from '@azure/msal-browser';

import {config} from '../../../config';

/**
 * Tests whether account is from correct domain, returns true if it is otherwise false
 * @param account - Account to be tested
 */
export function testValidAccount(account: AccountInfo): boolean
{
    return account.username.split('@')[1] == config.configuration.authConfig.authDomain;
}
