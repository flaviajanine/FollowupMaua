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

  constructor( private AmCharts: AmChartsService, 
               private _sharedService: SharedService ) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {

  this.chart = this.AmCharts.makeChart('amchart-3', {
    'type': 'serial',
    'addClassNames': true,
    'theme': 'light',
    'autoMargins': false,
    'marginLeft': 30,
    'marginRight': 8,
    'marginTop': 10,
    'marginBottom': 26,
    'balloon': {
      'adjustBorderColor': false,
      'horizontalPadding': 10,
      'verticalPadding': 8,
      'color': '#ffffff'
    },

    'dataProvider': [ {
      'prova': "P1",
      'nota': 8.5,
      'média geral': 7.5
    }, {
      'prova': "P2",
      'nota': 5.5,
      'média geral': 6.5
    }, {
      'prova': "PS1",
      'nota': 6.5,
      'média geral': 7.5
    }, {
      'prova': "P3",
      'nota': 5.5,
      'média geral': 4.5,
    },
    {
      'prova': "P4",
      'nota': 6.5,
      'média geral': 6.5,
      'dashLengthColumn': 5,
      'alpha': 0.2,
      'additional': '(projection)'
    },
    {
      'prova': "PS2",
      'nota': 0,
      'média geral': 5,
      'dashLengthColumn': 5,
      'alpha': 0.2,
      'additional': '(projection)'
    }
   ],
    'valueAxes': [ {
      'axisAlpha': 0,
      'position': 'left'
    } ],
    'startDuration': 1,
    'graphs': [ {
      'alphaField': 'alpha',
      'balloonText': '<span style="font-size:12px;">[[title]] in [[category]]:<br><span style="font-size:20px;">[[value]]</span> [[additional]]</span>',
      'fillAlphas': 1,
      'title': 'Nota',
      'type': 'column',
      'valueField': 'nota',
      'dashLengthField': 'dashLengthColumn'
    }, {
      'id': 'graph2',
      'balloonText': '<span style="font-size:12px;">[[title]] in [[category]]:<br><span style="font-size:20px;">[[value]]</span> [[additional]]</span>',
      'bullet': 'round',
      'lineThickness': 3,
      'bulletSize': 7,
      'bulletBorderAlpha': 1,
      'bulletColor': '#FFFFFF',
      'useLineColorForBulletBorder': true,
      'bulletBorderThickness': 3,
      'fillAlphas': 0,
      'lineAlpha': 1,
      'title': 'Média geral',
      'valueField': 'média geral',
      'dashLengthField': 'dashLengthLine'
    } ],
    'categoryField': 'prova',
    'categoryAxis': {
      'gridPosition': 'start',
      'axisAlpha': 0,
      'tickLength': 0
    }
  });
}

public polarAreaChartLabels: string[] = [
  'Aprovação',
  'Reprovação',
  'Trancamentos'
];
public polarAreaChartData: number[] = [
  300,
  500,
  100
];
public polarAreaLegend: boolean = true;

public polarAreaChartType: string = 'polarArea';

public polarAreaChartOptions: any = {
  responsiveAnimationDuration: 500
};


  ngOnDestroy() {
    this.AmCharts.destroyChart(this.chart);
  }
}
