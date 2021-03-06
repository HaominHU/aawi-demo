import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {PoliticalRoutes} from './political.routing';
import {PartyAffiliationComponent} from './party-affiliation/party-affiliation.component';
import {CivicEngagementComponent} from './civic-engagement/civic-engagement.component';
import {EthicSelectionModule} from '../shared/ethic-selection/ethic-selection.module';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PoliticalRoutes),
    FormsModule,
    EthicSelectionModule
  ],
  declarations: [
    PartyAffiliationComponent,
    CivicEngagementComponent,
  ]
})

export class PoliticalModule {}
