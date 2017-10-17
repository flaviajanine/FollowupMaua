import { ProfsService } from './../../../services/profs.service';
import { PredictService } from './../../../services/predict.service';
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
  prova: number;
  alpha;
  dash;
  add: string;

  MP1: number;
  MP2: number;
  MP3: number;
  MP4: number;
  MP1h: number;
  MP2h: number;
  MP3h: number;
  MP4h: number;

  constructor(private AmCharts: AmChartsService,
    private _sharedService: SharedService,
    private http: Http,
    private pred: PredictService,
    private prof: ProfsService
  ) {
    this._sharedService.emitChange(this.pageTitle);
  }

  relatorio(){
    this.http.get('./pdf.php')
    .subscribe(
      (res: Response) =>{
        if(res.json().File == "1"){
          window.open('./alunos.pdf');
        }
      }
    );
  }

  predict(){
    switch(this.prova){
      case 1:
      {
        this.http.get('./getnotaP2.php').subscribe();
        this.http.get('./getnotaP3.php').subscribe();
        this.http.get('./getnotaP4.php').subscribe();
        break;
      }
      case 2:
      {
        this.http.get('./getnotaP3.php').subscribe();
        this.http.get('./getnotaP4.php').subscribe();
        break;
      }
      case 3:
      {
        this.http.get('./getnotaP4.php').subscribe();
        break;
      }
      
    }
    alert("Aperte atualizar para visualizar os resultados.");
  }

  graficos(){

    this.AmCharts.destroyChart(this.chart);
    this.grafdata =[];
    this.grafdata2 =[];
    this.prof.getinfoProf()
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

      this.add = '(predição)';
      this.alpha = 0.2;
      this.dash = 5;


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
  
      switch(this.prova){
        case 1:
        {
          this.grafdata.push({
            prova: 'P1',
            nota: this.MP1,
            Mgeral: this.MP1h
          });
          this.grafdata.push({
            prova: 'P2',
            nota: MP2,
            Mgeral: this.MP2h,
            dashLengthColumn: this.dash,
            alpha: this.alpha,
            additional: this.add
          });
          this.grafdata.push({
            prova: 'P3',
            nota: MP3,
            Mgeral: this.MP3h,
            dashLengthColumn: this.dash,
            alpha: this.alpha,
            additional: this.add
          });
          this.grafdata.push({
            prova: 'P4',
            nota: MP4,
            Mgeral: this.MP4h,
            dashLengthColumn: this.dash,
            alpha: this.alpha,
            additional: this.add
          });
          break;
        }
        case 2:
        {
            this.grafdata.push({
              prova: 'P1',
              nota: this.MP1,
              Mgeral: this.MP1h
            });
            this.grafdata.push({
              prova: 'P2',
              nota: this.MP2,
              Mgeral: this.MP2h
            });
            this.grafdata.push({
              prova: 'P3',
              nota: MP3,
              Mgeral: this.MP3h,
              dashLengthColumn: this.dash,
              alpha: this.alpha,
              additional: this.add
            });
            this.grafdata.push({
              prova: 'P4',
              nota: MP4,
              Mgeral: this.MP4h,
              dashLengthColumn: this.dash,
              alpha: this.alpha,
              additional: this.add
            });
          break;
        }
        case 3:
        {
            this.grafdata.push({
              prova: 'P1',
              nota: this.MP1,
              Mgeral: this.MP1h
            });
            this.grafdata.push({
              prova: 'P2',
              nota: this.MP2,
              Mgeral: this.MP2h
            });
            this.grafdata.push({
              prova: 'P3',
              nota: this.MP3,
              Mgeral: this.MP3h
            });
            this.grafdata.push({
              prova: 'P4',
              nota: MP4,
              Mgeral: this.MP4h,
              dashLengthColumn: this.dash,
              alpha: this.alpha,
              additional: this.add
            });
          break;
        }
        
      }
      
    
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

    });

  }

  ngOnInit() {

    this.http.get('./profReal.php')
    .subscribe(
      (res: Response) =>
  {
    let data = res.json();
    let Ap = parseFloat(data.Aprovados);
    let Rp = parseFloat(data.Reprovados);
    let Tc = parseFloat(data.Trancaram);
    this.MP1 = parseFloat(data.MP1);
    this.MP2 = parseFloat(data.MP2);
    this.MP3 = parseFloat(data.MP3);
    this.MP4 = parseFloat(data.MP4);
    this.MP1h = parseFloat(data.MP1h);
    this.MP2h = parseFloat(data.MP2h);
    this.MP3h = parseFloat(data.MP3h);
    this.MP4h = parseFloat(data.MP4h);

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
      nota: this.MP1,
      Mgeral: this.MP1h
    });
    this.grafdata.push({
      prova: 'P2',
      nota: this.MP2,
      Mgeral: this.MP2h
    });
    this.grafdata.push({
      prova: 'P3',
      nota: this.MP3,
      Mgeral: this.MP3h
    });
    this.grafdata.push({
      prova: 'P4',
      nota: this.MP4,
      Mgeral: this.MP4h,
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
