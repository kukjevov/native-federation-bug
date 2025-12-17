import {withNativeFederation} from '@angular-architects/native-federation/config.js';

import sharedDependencies from '../sharedDependencies.js';

const {name, exposes, shared, sharedMappings, skip, externals, features} = withNativeFederation(
{
    name: 'main',
    shared:
    {
        ...sharedDependencies,
    },
});

export {name, exposes, shared, sharedMappings, skip, externals, features};
