import {Component, ElementRef, Input, OnInit, ViewChild, OnChanges} from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {
  @ViewChild('pieChart') pie: ElementRef;
  @Input() data: any;
  @Input() width: any;
  @Input() height: any;
  @Input() colorNo: number;

  constructor() { }

  ngOnInit() {
    this._createChart();
  }

  ngOnChanges() {
    console.log('changes');
  }

  _createChart() {
    var chartConfig = {
      type: 'pie',
      data: this._getData(),
      options: this._getOptions()
    };

    var canvas = this.pie.nativeElement;
    canvas.width = this.width;
    canvas.height = this.height;

    let ctx = canvas.getContext('2d');

    var chart = new Chart(ctx, chartConfig);
  }

  _getData() {
    return {
      labels: this._fetchLabels(),
      datasets: [
        {
          "data": this._fetchData(this.data),
          "backgroundColor": this._getColors()
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

  _getColors() {
    var colors = ["#3366cc", "#dc3912", "#ff9900", "#109618", "#990099", "#0099c6", "#dd4477", "#66aa00", "#b82e2e", "#316395", "#994499", "#22aa99", "#aaaa11", "#6633cc", "#e67300", "#8b0707", "#651067", "#329262", "#5574a6", "#3b3eac"];
    var selection = [...colors];
    return selection.slice(0, this.colorNo);
  }

}
