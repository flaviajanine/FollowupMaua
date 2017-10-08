import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../layouts/shared-service';
import { AmChartsService } from '@amcharts/amcharts3-angular';


@Component({
  moduleId: module.id,
  selector: 'page-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class PageDashboardComponent {
  pageTitle: string = 'Dashboard Aluno';
  private chart: any;

  constructor( private AmCharts: AmChartsService, private _sharedService: SharedService ) {
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

    this.chart = this.AmCharts.makeChart('amchart-5', {
      'type': 'pie',
      'theme': 'light',
      'dataProvider': [
        {
          'Situação': 'Aprovado',
          'value': 70
        }, {
          'Situação': 'Reprovado',
          'value': 30
        }
      ],
      'titleField': 'Situação',
      'valueField': 'value',
      'labelRadius': 5,

      'radius': '42%',
      'innerRadius': '60%',
      'labelText': '[[Situação]]'
    });

  }

  ngOnDestroy() {
    this.AmCharts.destroyChart(this.chart);
  }
  
}