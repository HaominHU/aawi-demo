import { Component, OnInit } from '@angular/core';
import {Datasource} from '../../source/datasource';
import * as _ from 'lodash';

@Component({
  selector: 'app-religious',
  templateUrl: './religious.component.html',
  styleUrls: ['./religious.component.css']
})
export class ReligiousComponent implements OnInit {

  datasource = new Datasource().getSource();
  year:number = this.datasource.year;
  choices = [];
  toHidden = [];
  aa: any;
  aal: number;

  chinese: any;
  chinesel: number;

  flpn: any;
  flpnl: number;

  idn: any;
  idnl: number;

  jpn: any;
  jpnl: number;
  krn: any;
  krnl: number;
  us: any;
  usl: number;
  vtm: any;
  vtml: number;

  constructor() { }

  ngOnInit() {
    this.choices = this.datasource.culture.map(
      record => {
        return {
          race: record.race,
          isChecked: true
        }
      }
    );

    this._createChart();
  }

  _createChart() {
    // Asian American
    this.aa = _.find(this.datasource.culture, {race: 'Asian American'}).religious;
    this.aal = Object.keys(this.aa).length;

    //Chinese
    this.chinese = _.find(this.datasource.culture, {race: 'Chinese'}).religious;
    this.chinesel = Object.keys(this.chinese).length;

    //Filipino
    this.flpn = _.find(this.datasource.culture, {race: 'Filipino'}).religious;
    this.flpnl = Object.keys(this.flpn).length;

    //Indian
    this.idn = _.find(this.datasource.culture, {race: 'Indian'}).religious;
    this.idnl = Object.keys(this.idn).length;
    
    //Japanese
    this.jpn = _.find(this.datasource.culture, {race: 'Japanese'}).religious;
    this.jpnl = Object.keys(this.jpn).length;

    //Korean
    this.krn = _.find(this.datasource.culture, {race: 'Korean'}).religious;
    this.krnl = Object.keys(this.krn).length;
    
    //U.S.
    this.us = _.find(this.datasource.culture, {race: 'US'}).religious;
    this.usl = Object.keys(this.us).length;

    //Vietnamese
    this.vtm = _.find(this.datasource.culture, {race: 'Vietnamese'}).religious;
    this.vtml = Object.keys(this.us).length;

  }

  update() {
    this.toHidden = this.choices.map(
      choice => {
        return !choice.isChecked;
      }
    );
  }
}
