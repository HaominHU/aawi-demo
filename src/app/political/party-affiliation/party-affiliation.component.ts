import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Datasource} from '../../source/datasource';
import * as _ from 'lodash';
import Chart from 'chart.js';

declare var $:any;

@Component({
  selector: 'app-party-affiliation',
  templateUrl: './party-affiliation.component.html',
  styleUrls: ['./party-affiliation.component.css']
})
export class PartyAffiliationComponent implements OnInit {

  @ViewChild('pie1') pie1: ElementRef;
  @ViewChild('pie2') pie2: ElementRef;
  @ViewChild('pie3') pie3: ElementRef;
  @ViewChild('pie4') pie4: ElementRef;
  @ViewChild('pie5') pie5: ElementRef;
  @ViewChild('pie6') pie6: ElementRef;
  @ViewChild('pie7') pie7: ElementRef;
  @ViewChild('pie8') pie8: ElementRef;

  datasource = new Datasource().getSource();
  year: number = this.datasource.year;
  choices = [];
  toHidden = [];

  constructor() { }

  ngOnInit() {

    this.choices = this.datasource.political.map(
      record => {
        return {
          race: record.race,
          isChecked: true
        }
      }
    );

    //  Init Bootstrap Select Picker
    // if ($(".selectpicker").length != 0) {
    //   $(".selectpicker").selectpicker({
    //     iconBase: "nc-icon",
    //     tickIcon: "nc-check-2"
    //   });
    // }
    this._createChart();
  }

  _createChart() {
    //Asian American
    var aa = _.find(this.datasource.political, {race: 'Asian American'});
    var aaConfig = this._getConfig(aa.partyAffilication);

    var canvas1 = this.pie1.nativeElement;
    let ctx1 = canvas1.getContext('2d');
    var chart1 = new Chart(ctx1, aaConfig);

    //Chinese
    var chinese = _.find(this.datasource.political, {race: 'Chinese'});
    var chineseConfig = this._getConfig(chinese.partyAffilication);
    var canvas2 = this.pie2.nativeElement;
    let ctx2 = canvas2.getContext('2d');
    var chart2 = new Chart(ctx2, chineseConfig);

    //Filipino
    var flpn = _.find(this.datasource.political, {race: 'Filipino'});
    var flpnConfig = this._getConfig(flpn.partyAffilication);
    var canvas3 = this.pie3.nativeElement;
    let ctx3 = canvas3.getContext('2d');
    var chart3 = new Chart(ctx3, flpnConfig);

    //Indian
    var idn = _.find(this.datasource.political, {race: 'Indian'});
    var idnConfig = this._getConfig(idn.partyAffilication);
    var canvas4 = this.pie4.nativeElement;
    let ctx4 = canvas4.getContext('2d');
    var chart4 = new Chart(ctx4, idnConfig);

    //Japanese
    var jpn = _.find(this.datasource.political, {race: 'Japanese'});
    var jpnConfig = this._getConfig(jpn.partyAffilication);
    var canvas5 = this.pie5.nativeElement;
    let ctx5 = canvas5.getContext('2d');
    var chart5 = new Chart(ctx5, jpnConfig);

    //Korean
    var krn = _.find(this.datasource.political, {race: 'Korean'});
    var krnConfig = this._getConfig(krn.partyAffilication);
    var canvas6 = this.pie6.nativeElement;
    let ctx6 = canvas6.getContext('2d');
    var chart6 = new Chart(ctx6, krnConfig);

    //U.S.
    var us = _.find(this.datasource.political, {race: 'US'});
    var usConfig = this._getConfig(us.partyAffilication);
    var canvas7 = this.pie7.nativeElement;
    let ctx7 = canvas7.getContext('2d');
    var chart7 = new Chart(ctx7, usConfig);

    //Korean
    var vtm = _.find(this.datasource.political, {race: 'Vietnamese'});
    var vtmConfig = this._getConfig(vtm.partyAffilication);
    var canvas8 = this.pie8.nativeElement;
    let ctx8 = canvas8.getContext('2d');
    var chart8 = new Chart(ctx8, vtmConfig);
  }

  _getConfig(data) {
    return {
      type: 'pie',
      data: this._getData(data),
      options: this._getOptions()
    };
  }

  _getData(data) {
    return {
      labels: this._fetchLabels(data),
      datasets: [
        {
          data: this._fetchData(data),
          borderWidth: 0,
          backgroundColor: [
            "#f4ee42",
            "#cd41f4",
            "#f44197"
          ]
        }]
    };
  }

  _getOptions() {
    return {

      legend: {

        display: true
      },

      tooltips: {
        enabled: true
      },

      scales: {
        yAxes: [{

          ticks: {
            display: false
          },
          gridLines: {
            drawBorder: false,
            zeroLineColor: "transparent",
            color: 'rgba(255,255,255,0.05)'
          }

        }],

        xAxes: [{
          barPercentage: 1.6,
          gridLines: {
            drawBorder: false,
            color: 'rgba(255,255,255,0.1)',
            zeroLineColor: "transparent"
          },
          ticks: {
            display: false,
          }
        }]
      },
    }
  }

  _fetchLabels(obj) {
    return Object.keys(obj).map(function (key) {
      return key;
    });
  }

  _fetchData(obj) {
    return Object.keys(obj).map(
      key => {
        return obj[key];
      }
    );
  }

  update() {
    this.toHidden = this.choices.map(
      choice => {
        return !choice.isChecked;
      }
    );
  }
}
