import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {
  @ViewChild('pieChart') pie: ElementRef;
  @Input() data: any;

  constructor() { }

  ngOnInit() {
    this._createChart();
  }

  _createChart() {
    var chartConfig = {
      type: 'pie',
      data: this._getData(),
      options: this._getOptions()
    };

    var canvas = this.pie.nativeElement;
    let ctx = canvas.getContext('2d');

    var chart = new Chart(ctx, chartConfig);
  }

  _getData() {
    return {
      labels: this._fetchLabels(),
      datasets: [
        {
          "data": this._fetchData(this.data),
          "backgroundColor": [
            "#f4ee42",
            "#cd41f4",
            "#f44197"
          ]
        }]
    };
  }

  _fetchLabels() {
    return Object.keys(this.data).map(function (key) {
      return key;
    });
  }

  _fetchData(data) {
    return Object.keys(data).map(function (key) {
      return data[key];
    })
  }

  _getOptions() {
    return {
      responsive: true
    }
  }

}
