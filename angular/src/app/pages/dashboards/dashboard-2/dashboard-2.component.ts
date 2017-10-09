import { Http, Response } from '@angular/http';
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
  private grafdata = [];
  private grafdata2 = [];

  constructor(private AmCharts: AmChartsService,
    private _sharedService: SharedService,
    private http: Http) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {

    let url = './infoProf.php';
    this.http.get(url)
    .subscribe(
      (res: Response) =>
  {
    let data = res.json();
    let Ap = parseFloat(data.Aprovados);
    let Rp = parseFloat(data.Reprovados);
    let Tc = parseFloat(data.Trancaram);
    let MP1 = parseFloat(data.MP1);
    let MP2 = parseFloat(data.MP2);
    let MP3 = parseFloat(data.MP3);
    let MP4 = parseFloat(data.MP4);
    let MPS1 = parseFloat(data.MPS1);
    let MPS2 = parseFloat(data.MPS2);
    let MP1h = parseFloat(data.MP1h);
    let MP2h = parseFloat(data.MP2h);
    let MP3h = parseFloat(data.MP3h);;
    let MP4h = parseFloat(data.MP4h);;
    let MPS1h = parseFloat(data.MPS1h);
    let MPS2h = parseFloat(data.MPS2h);;

    this.grafdata2.push({
      nAlunos: Ap,
      Situacao: 'Aprovados'
    });
    this.grafdata2.push({
      nAlunos: Rp,
      Situacao: 'Reprovados'
    });
    this.grafdata2.push({
      nAlunos: Tc,
      Situacao: "Trancaram Matrícula"
    });

    

    console.log(this.grafdata2);

    this.grafdata.push({
      prova: 'P1',
      nota: MP1,
      Mgeral: MP1h
    });
    this.grafdata.push({
      prova: 'P2',
      nota: MP2,
      Mgeral: MP2h
    });
    this.grafdata.push({
      prova: 'PS1',
      nota: MPS1,
      Mgeral: MPS1h
    });
    this.grafdata.push({
      prova: 'P3',
      nota: MP3,
      Mgeral: MP3h
    });
    this.grafdata.push({
      prova: 'P4',
      nota: MP4,
      Mgeral: MP4h,
      dashLengthColumn: 5,
      alpha: 0.2,
      additional: '(projection)'
    });
    this.grafdata.push({
      prova: 'PS2',
      nota: MPS2,
      Mgeral : MPS2h,
      dashLengthColumn: 5,
      alpha: 0.2,
      additional: '(projection)'
    });
  
    this.chart = this.AmCharts.makeChart('amchart-4', {
      'type': 'pie',
      'theme': 'light',
      'dataProvider': this.grafdata2,
      'valueField': 'nAlunos',
      'titleField': 'Situacao',
      'marginLeft': 0,
      'marginRight': 0,
      'marginTop': 0,
      'marginBottom': 0,
      'balloon': {
        'fixedPosition': true
      }
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
    'valueAxes': [{
      'axisAlpha': 0,
      'position': 'left'
    }],
    'startDuration': 1,
    'graphs': [{
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
    }],
    'categoryField': 'prova',
    'categoryAxis': {
      'gridPosition': 'start',
      'axisAlpha': 0,
      'tickLength': 0
    }
  });
    
  });

  
}

  ngOnDestroy() {
    this.AmCharts.destroyChart(this.chart);
  }
}
