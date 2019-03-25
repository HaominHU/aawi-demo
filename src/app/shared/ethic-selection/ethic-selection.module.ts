import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EthicSelectionComponent } from './ethic-selection/ethic-selection.component';
import {FormsModule} from '@angular/forms';
import { EthicSelectionForBarchartComponent } from './ethic-selection-for-barchart/ethic-selection-for-barchart.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [EthicSelectionComponent, EthicSelectionForBarchartComponent],
  exports: [EthicSelectionComponent, EthicSelectionForBarchartComponent]
})
export class EthicSelectionModule { }
