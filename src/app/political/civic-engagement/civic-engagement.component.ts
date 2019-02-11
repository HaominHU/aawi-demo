import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Datasource} from '../../source/datasource';
import * as _ from 'lodash';
import Chart from 'chart.js';

@Component({
  selector: 'app-civic-engagement',
  templateUrl: './civic-engagement.component.html',
  styleUrls: ['./civic-engagement.component.css']
})
export class CivicEngagementComponent implements OnInit {

  @ViewChild('voted') voted: ElementRef;
  @ViewChild('registerToVote') registerToVote: ElementRef;
  @ViewChild('workWithOther') workWithOther: ElementRef;

  datasource = new Datasource().getSource();
  year: number = this.datasource.year;
  chart: any;
  chart2: any;
  chart3: any;
  choices = [];
  chartData = [];
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
    this.update();
  }


  _createChart() {

    if(this.chart) {
      this.chart.destroy();
    }

    if(this.chart2) {
      this.chart2.destroy();
    }

    if(this.chart3) {
      this.chart3.destroy();
    }
    // Voted in 2018
    var voteConfig = this._getConfig(this.chartData, 'vote');
    var canvas = this.voted.nativeElement;
    let ctx = canvas.getContext('2d');
    this.chart = new Chart(ctx, voteConfig);

    // Registered to vote
    var registerConfig = this._getConfig(this.chartData, 'registerToVote')
    var canvas2 = this.registerToVote.nativeElement;
    let ctx2 = canvas2.getContext('2d');
    this.chart2 = new Chart(ctx2, registerConfig);

    //Work with others
    var workConfig = this._getConfig(this.chartData, 'workWithOther')
    var canvas3 = this.workWithOther.nativeElement;
    let ctx3 = canvas3.getContext('2d');
    this.chart3 = new Chart(ctx3, workConfig);
  }

  _getConfig(data, question) {
    return {
      type: 'horizontalBar',
      data: this._getData(data, question),
      options: this._getOptions()
    }
  }

  _getData(data, question) {
    var chartLabel: string;
    var label = data.map(
      record => {
        return record.race;
      }
    );

    var values = data.map(
      race => {
        return race.civicEngagement[question];
      }
    );

    switch (question) {
      case 'vote':
        chartLabel = '% of U.S. citizens voted in 2018 presidential election';
        break;
      case 'registerToVote':
        chartLabel = '% of U.S. citizens who are registered to vote';
        break;
      case 'workWithOther':
        chartLabel = '% saying they have worked with other people from neighbourhood to fix a problem' +
          'or improve a condition in their community in the past year';
        break;
    }

    // var data2 = this.datasource.data.map(
    //   race => {
    //     return race.qestions.workWithOther;
    //   }
    // );
    // console.log("data",data);

    var myColors = this._getColors(values);
    return {
      labels: label,
      datasets: [
        {
          label: chartLabel,
          backgroundColor: myColors,
          data: values
        },
        // {
        //   label: '% saying they have worked with others',
        //   data: data2
        // }
      ]
    }
  }

  _getOptions() {
    return {
      // animation: false,
      responsive: true,
      // maintainAspectRatio: false,
      legend: {
        display: false,
        labels: {
          fontColor: 'black',
        },
      },
      scales: {
        xAxes: [{
          ticks: {
            min: 0
          }
        }],
      }
      // scales: {
      //   xAxes: [{
      //
      //     // ticks: {
      //     //   fontColor: "black",
      //     //   // autoSkip: true,
      //     //   // autoSkipPadding: 100,
      //     //   autoSkip: false,
      //     //   callback: function (value, index, values) {
      //     //     return new moment(value).format('MMM.DD')
      //     //   }
      //     //
      //     // },
      //     gridLines: {
      //       display: false,
      //       drawBorder: false,
      //       zeroLineColor: 'black',
      //     },
      //     offset: true,
      //     stacked: true
      //
      //   }],
      //   yAxes: [{
      //     scaleLabel: {
      //       display: true,
      //       labelString: 'Intake Times(time(s))'
      //     },
      //     ticks: {
      //       fontColor: "black",
      //       // suggestedMin: ctrl.minY || 0,
      //       //suggestedMax: ctrl.maxY || 5,
      //       suggestedMax: 5,
      //       suggestedMin: 0,
      //       //stepSize: 1,
      //
      //     },
      //     gridLines: {
      //       drawBorder: false,                        // <-- this setting will make line at x = 0 drawn or not
      //       color: '#6dc841',
      //       zeroLineColor: 'black' // <-- this setting to define grid line at x = 0
      //     },
      //     //stacked: true
      //
      //   }]
      // },
      // tooltips: {
      //   enable: false,
      //   callbacks: {
      //     title: function(tooltipItems, data) {
      //       var date = data.labels[tooltipItems[0].index];
      //
      //       if (date.format("YYYYMMDD") == moment().format("YYYYMMDD")) {
      //         return "Today";
      //       }
      //
      //       return data.labels[tooltipItems[0].index].format("YYYY-MM-DD");
      //     }
      //   },
      //
      // },

    }
  }

  _getColors(array) {
    var colors: string[] = new Array(array.length).fill('#E4B852');
    // var newArray = [...array];
    // newArray = newArray.sort();
    // var max = newArray[newArray.length - 1];
    // var second = newArray[newArray.length - 2];

    colors[0] = '#265481';
    colors[6] = '#3DB2B2';

    return colors;
  }

  update() {
    this.chartData = [];
    this.choices.forEach(
      choice => {
        if(choice.isChecked) {
          this.chartData.push(_.find(this.datasource.political, {race: choice.race}));
        }
      }
    );
    this._createChart();
  }

}
