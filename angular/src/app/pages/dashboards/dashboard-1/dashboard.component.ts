import { getTestBed } from '@angular/core/testing';
import { AlunosService } from './../../../services/alunos.service';
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
  prova: number;
  alpha;
  dash;
  add: string;
  P1: number;
  P2: number;
  P3: number;
  P4: number;
  MP1: number;
  MP2: number;
  MP3: number;
  MP4: number;

  constructor(private AmCharts: AmChartsService,
    private http: Http,
    private _sharedService: SharedService,
    private aluno: AlunosService
  ) {
    this._sharedService.emitChange(this.pageTitle);
  }

  predict() {
    console.log(this.prova);
    console.log(typeof this.prova);
    switch(this.prova){
      case 1:
      {
        this.http.get('./getnotaP2aluno.php').subscribe();
        this.http.get('./getnotaP3aluno.php').subscribe();
        this.http.get('./getnotaP4aluno.php').subscribe();
        break;
      }
      case 2:
      {
        this.http.get('./getnotaP3aluno.php').subscribe();
        this.http.get('./getnotaP4aluno.php').subscribe();
        break;
      }
      case 3:
      {
        this.http.get('./getnotaP4aluno.php').subscribe();
        break;
      }
      
    }
    alert("Aperte atualizar para visualizar os resultados.");
  }

  graficos(){   

    this.AmCharts.destroyChart(this.chart);
    this.grafdata =[];
    this.grafdata2 =[];
    this.aluno.getnotaAluno()
    .subscribe(
      (res: Response) => {
        let data = res.json();

        let sit = data.Situacao;
        let P1 = parseFloat(data.P1);
        let P2 = parseFloat(data.P2);
        let P3 = parseFloat(data.P3);
        let P4 = parseFloat(data.P4);
        this.add = '(predição)';
        this.alpha = 0.2;
        this.dash = 5;
        
        switch(this.prova){
          case 1:
          {
            this.grafdata.push({
              prova: 'P1',
              nota: this.P1,
              Mgeral: this.MP1
            });
            this.grafdata.push({
              prova: 'P2',
              nota: P2,
              Mgeral: this.MP2,
              dashLengthColumn: this.dash,
              alpha: this.alpha,
              additional: this.add
            });
            this.grafdata.push({
              prova: 'P3',
              nota: P3,
              Mgeral: this.MP3,
              dashLengthColumn: this.dash,
              alpha: this.alpha,
              additional: this.add
            });
            this.grafdata.push({
              prova: 'P4',
              nota: P4,
              Mgeral: this.MP4,
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
              nota: this.P1,
              Mgeral: this.MP1
            });
            this.grafdata.push({
              prova: 'P2',
              nota: this.P2,
              Mgeral: this.MP2
            });
            this.grafdata.push({
              prova: 'P3',
              nota: P3,
              Mgeral: this.MP3,
              dashLengthColumn: this.dash,
              alpha: this.alpha,
              additional: this.add
            });
            this.grafdata.push({
              prova: 'P4',
              nota: P4,
              Mgeral: this.MP4,
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
              nota: this.P1,
              Mgeral: this.MP1
            });
            this.grafdata.push({
              prova: 'P2',
              nota: this.P2,
              Mgeral: this.MP2
            });
            this.grafdata.push({
              prova: 'P3',
              nota: this.P3,
              Mgeral: this.MP3
            });
            this.grafdata.push({
              prova: 'P4',
              nota: P4,
              Mgeral: this.MP4,
              dashLengthColumn: this.dash,
              alpha: this.alpha,
              additional: this.add
            });
            break;
          }
        }
        console.log(this.grafdata);
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

        if (data.Situacao === "AP1") { this.sit2 = "RP1"; } else { this.sit2 = "AP1"; }
        
              //  console.log(data);
        
                this.grafdata2.push({
                  Situacao: sit,
                  value: parseFloat(data.NivelConf)
                });
                this.grafdata2.push({
                  Situacao: this.sit2,
                  value: 1 - parseFloat(data.NivelConf)
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
    )
  }

  ngOnInit() {

    this.http.get('./alunoReal.php')
      .subscribe(
      (res: Response) => {
        let data = res.json();

        let sit = data.Situacao;
        this.P1 = parseFloat(data.P1);
        this.P2 = parseFloat(data.P2);
        this.P3 = parseFloat(data.P3);
        this.P4 = parseFloat(data.P4);
        this.MP1 = parseFloat(data.MP1);
        this.MP2 = parseFloat(data.MP2);
        this.MP3 = parseFloat(data.MP3);
        this.MP4 = parseFloat(data.MP4);

        if (data.Situacao === "AP1") { this.sit2 = "RP1"; } else { this.sit2 = "AP1"; }

      //  console.log(data);

        this.grafdata2.push({
          Situacao: sit,
          value: parseFloat(data.NivelConf)
        });
        this.grafdata2.push({
          Situacao: this.sit2,
          value: 1 - parseFloat(data.NivelConf)
        });

     //   console.log(this.grafdata2);

        this.grafdata.push({
          prova: 'P1',
          nota: this.P1,
          Mgeral: this.MP1
        });
        this.grafdata.push({
          prova: 'P2',
          nota: this.P2,
          Mgeral: this.MP2
        });
        this.grafdata.push({
          prova: 'P3',
          nota: this.P3,
          Mgeral: this.MP3
        });
        this.grafdata.push({
          prova: 'P4',
          nota: this.P4,
          Mgeral: this.MP4
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