import { Response } from '@angular/http';
import { ApiService } from './../../../services/api.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../layouts/shared-service';



@Component({
  selector: 'page-bootstrap-tables',
  templateUrl: './bootstrap-tables.component.html',
  styleUrls: ['./bootstrap-tables.component.scss']
})
export class PageBootstrapTablesComponent implements OnInit {
  pageTitle: string = 'Minha Conta';
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
