import {NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';
import {PiechartComponent} from './piechart.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [PiechartComponent],
  exports: [PiechartComponent]
})

export class PieChartModule{}
