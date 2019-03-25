import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Datasource} from '../../../source/datasource';

@Component({
  selector: 'app-ethic-selection-for-barchart',
  templateUrl: './ethic-selection-for-barchart.component.html',
  styleUrls: ['./ethic-selection-for-barchart.component.css']
})
export class EthicSelectionForBarchartComponent implements OnInit {

  @Input() source: string;
  @Output() onUpdate = new EventEmitter<any>();

  choices = [];
  datasource = new Datasource().getSource();

  constructor() { }

  ngOnInit() {
    this.choices = this.datasource[this.source].map(
      record => {
        return {
          race: record.race,
          isChecked: true
        }
      }
    );
    this.onUpdate.emit(this.choices);
  }

  needUpdate() {
    this.onUpdate.emit(this.choices);
  }
}
