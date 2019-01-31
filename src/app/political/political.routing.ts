import { Routes } from '@angular/router';

import {PartyAffiliationComponent} from './party-affiliation/party-affiliation.component';
import {CivicEngagementComponent} from './civic-engagement/civic-engagement.component';

export const PoliticalRoutes: Routes = [
  {
    path: '',
    children:[{
      path: 'party',
      component: PartyAffiliationComponent
    }]
  },
  {
    path: '',
    children: [
      {
        path:'civic',
        component: CivicEngagementComponent
      }
    ]
  }
];
