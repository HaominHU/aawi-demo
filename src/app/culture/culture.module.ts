import { NgModule} from '@angular/core';
import { RouterModule} from '@angular/router';
import { CommonModule} from '@angular/common';
import { FormsModule} from '@angular/forms';

import { CultureRoutes} from './culture.routing';
import { ReligiousComponent} from './religious/religious.component';
import { IdentityComponent} from './identity/identity.component';
import { CoreValuesComponent} from './core-values/core-values.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CultureRoutes),
    FormsModule
  ],
  declarations: [
    ReligiousComponent,
    IdentityComponent,
    CoreValuesComponent
  ]
})

export class CultureModule {}
