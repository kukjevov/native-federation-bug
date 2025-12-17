import { initFederation } from '@angular-architects/native-federation';

initFederation()
  .catch(err => console.error(err))
  .then(_ => import('./main.browser.bootstrap'))
  .catch(err => console.error(err));
