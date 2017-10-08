import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../layouts/shared-service';

const timelineData: any[] = [
  {
    'label': '2017',
    'timeline': [
      {
        'date': 'Outubro, 2017',
        'content': `Primeira versão.`,
        'pointColor': '#C5CAE9'
      },
      {
        'date': 'Agosto, 2017',
        'content': `Modelagem final.`,
        'pointColor': '#FF8A65'
      },
      {
        'date': 'Julho, 2017',
        'content': `Conversas com desenvolvedores Watson.`,
        'pointColor': '#B3E5FC'
      },
      {
        'date': 'Maio, 2017',
        'content': `Estudos das ferramentas.`,
        'pointColor': '#B2DFDB'
      },
      {
        'date': 'Março, 2017',
        'content': `Definição de escopo, requerimento de dados.`,
        'pointColor': '#3E5EFF'
      }
    ]
  }
];

@Component({
  selector: 'page-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class PageTimelineComponent implements OnInit {
  pageTitle: string = 'Timeline';
  timelineData: any[] = timelineData;

  constructor( private _sharedService: SharedService ) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {}
}
