import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../layouts/shared-service';


const links = [
 ' Cálculo Diferencial e Integral I',	
 ' Vetores e Geometria Analítica',
 ' Física I',
 ' Desenho',
 ' Algoritmos e Programação',	 
 ' Química Geral',
 ' Introdução à Engenharia',
];


@Component({
  moduleId: module.id,
  selector: 'page-list',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.scss']
})
export class PageListComponent implements OnInit {
  pageTitle: string = 'Disciplinas Cadastradas';
  links = links;
  constructor( private _sharedService: SharedService ) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {}
}