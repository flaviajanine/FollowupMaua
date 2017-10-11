import { Http, Response } from '@angular/http';
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
  private grafdata = [];
  private grafdata2 = [];
  private sit2: string;

  constructor( private AmCharts: AmChartsService, 
               private http: Http,
    this._sharedService.emitChange(this.pageTitle);
  }
  
  ngOnInit() {

    let url = './infoAluno.php';
    this.http.get(url)
      .subscribe(
        (res: Response) =>
    {
      let data = res.json();

      let sit = data.Situacao;
      let P1 = parseFloat(data.P1);
      let P2 = parseFloat(data.P2);
      let P3 = parseFloat(data.P3);
      let P4 = parseFloat(data.P4);
      let PS1 = parseFloat(data.PS1);
      let PS2 = 0;
      let MP1 = parseFloat(data.MP1);
      let MP2 = parseFloat(data.MP2);
      let MP3 = parseFloat(data.MP3);;
      let MP4 = parseFloat(data.MP4);;
      let MPS1 = parseFloat(data.MPS1);
      let MPS2 = parseFloat(data.MPS2);;
      
     if(data.Situacao === "AP1"){ this.sit2 = "RP1"; }else{ this.sit2 = "AP1"; }

      console.log(data);

      this.grafdata2.push({
        Situacao: sit,
        value: parseFloat(data.NivelConf)         
      });
      this.grafdata2.push({
        Situacao: this.sit2,
        value: 1 - parseFloat(data.NivelConf)        
      });

      console.log(this.grafdata2);
      
      this.grafdata.push({
        prova: 'P1',
        nota: P1,
        Mgeral: MP1
      });
      this.grafdata.push({
        prova: 'P2',
        nota: P2,
        Mgeral: MP2
      });
      this.grafdata.push({
        prova: 'PS1',
        nota: PS1,
        Mgeral: MPS1
      });
      this.grafdata.push({
        prova: 'P3',
        nota: P3,
        Mgeral: MP3
      });
      this.grafdata.push({
        prova: 'P4',
        nota: P4,
        Mgeral: MP4,
        dashLengthColumn: 5,
        alpha: 0.2,
        additional: '(projection)'
      });
      this.grafdata.push({
        prova: 'PS2',
        nota: PS2,
        Mgeral : MPS2,
        dashLengthColumn: 5,
        alpha: 0.2,
        additional: '(projection)'
      });
      
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
      'dataProvider': this.grafdata,
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
        'title': 'Mgeral',
        'valueField': 'Mgeral',
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
      'dataProvider': this.grafdata2,
      'titleField': 'Situacao',
      'valueField': 'value',
      'labelRadius': 5,

      'radius': '42%',
      'innerRadius': '60%',
      'labelText': '[[Situacao]]'
    });


    }
      );
  }

  ngOnDestroy() {
    this.AmCharts.destroyChart(this.chart);
  }
  
}