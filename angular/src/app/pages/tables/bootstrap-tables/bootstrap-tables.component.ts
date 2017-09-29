import { Response } from '@angular/http';
import { ApiService } from './../../../services/api.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../layouts/shared-service';

const BREADCRUMBS: any[] = [
  {
    title: 'Meu Perfil',
    link: '/default-layout/bootstrap-tables'
  }
];

@Component({
  selector: 'page-bootstrap-tables',
  templateUrl: './bootstrap-tables.component.html',
  styleUrls: ['./bootstrap-tables.component.scss']
})
export class PageBootstrapTablesComponent implements OnInit {
  pageTitle: string = 'Minha Conta';
  breadcrumb: any[] = BREADCRUMBS;
 // results: any[];
  nome: string;
  email: string;

  constructor( private _sharedService: SharedService,
    private router: Router,
    private apiservice: ApiService
  ) {
    this._sharedService.emitChange(this.pageTitle);
    this.apiservice.getData()
    .subscribe( (res: Response) =>
    {
      let data = res.json();    
      this.nome = data.NOME;
      this.email = data.EMAIL;
      console.log(data);
    });
   
}

  ngOnInit() {}
}
