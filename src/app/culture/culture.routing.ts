import { Routes} from '@angular/router';

import { ReligiousComponent } from './religious/religious.component';
import { IdentityComponent } from './identity/identity.component';
import { CoreValuesComponent} from './core-values/core-values.component';

export const CultureRoutes: Routes = [
  {path: '',
    children: [{
      path: 'religious',
      component: ReligiousComponent
    }]
  },
  {
    path: '',
    children: [{
      path: 'cultureidentity',
      component: IdentityComponent
    }]
  },
  {
    path: '',
    children: [{
      path: 'corevalues',
      component: CoreValuesComponent
    }]
  }
];
