import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Datasource} from '../../../source/datasource';

@Component({
  selector: 'app-ethic-selection',
  templateUrl: './ethic-selection.component.html',
  styleUrls: ['./ethic-selection.component.css']
})
export class EthicSelectionComponent implements OnInit {

  @Input() source: string;
  @Output() onUpdate = new EventEmitter<any>();

  datasource = new Datasource().getSource();
  choices = [];

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
