import { NgModule} from '@angular/core';
import { RouterModule} from '@angular/router';
import { CommonModule} from '@angular/common';
import { FormsModule} from '@angular/forms';

import { CultureRoutes} from './culture.routing';
import { ReligiousComponent} from './religious/religious.component';
import { IdentityComponent} from './identity/identity.component';
import { CoreValuesComponent} from './core-values/core-values.component';
import {PieChartModule} from '../shared/piechart/piechart.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CultureRoutes),
    FormsModule,
    PieChartModule
  ],
  declarations: [
    ReligiousComponent,
    IdentityComponent,
    CoreValuesComponent
  ]
})

export class CultureModule {}
