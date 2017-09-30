import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../layouts/shared-service';
import { AmChartsService } from '@amcharts/amcharts3-angular';


@Component({
  selector: 'page-dashboard-2',
  templateUrl: './dashboard-2.component.html',
  styleUrls: ['./dashboard-2.component.scss']
})
export class PageDashboard2Component implements OnInit {
  pageTitle: string = 'Dashboard Professor';
  private chart: any;

  constructor( private AmCharts: AmChartsService, private _sharedService: SharedService ) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {
    this.chart = this.AmCharts.makeChart('amchart-1', {
      'type': 'serial',
      'theme': 'light',
      'dataProvider': [
        {
          'prova': 'P1',
          'nota': 8.5
        }, {
          'prova': 'P2',
          'nota': 5.5
        }, {
          'prova': 'PS1',
          'nota': 6.5
        }, {
          'prova': 'P3',
          'nota': 7.5
        }, {
          'prova': 'P4',
          'nota': 6.5
        }, {
          'prova': 'PS@',
          'nota': 7.5
        }
      ],
      'valueAxes': [ {
        'gridColor': '#FFFFFF',
        'gridAlpha': 0.2,
        'dashLength': 0
      } ],
      'gridAboveGraphs': true,
      'startDuration': 1,
      'graphs': [ {
        'balloonText': '[[category]]: <b>[[value]]</b>',
        'fillAlphas': 0.8,
        'lineAlpha': 0.2,
        'type': 'column',
        'valueField': 'nota'
      } ],
      'chartCursor': {
        'categoryBalloonEnabled': false,
        'cursorAlpha': 0,
        'zoomable': false
      },
      'categoryField': 'prova',
      'categoryAxis': {
        'gridPosition': 'start',
        'gridAlpha': 0,
        'tickPosition': 'start',
        'tickLength': 20
      }
    });

  }

  ngOnDestroy() {
    this.AmCharts.destroyChart(this.chart);
  }
}
