import { Component, OnInit } from '@angular/core';

const BREADCRUMBS: any[] = [
  {
    title: 'Main',
    link: '#/default-layout/dashboard'
  },
  {
    title: 'Notas',
    link: '#/default-layout/form-layout'
  },
  {
    title: 'Inserir notas',
    link: ''
  }
];

// aqui só lida com a lógica por trás da view (HTML) desse componente

@Component({
  selector: 'app-form-layout',
  templateUrl: './form-layout.component.html',
  styleUrls: ['./form-layout.component.scss']
})
export class PageFormLayoutComponent implements OnInit {
  pageTitle: string = 'Inserir notas';
  breadcrumb: any[] = BREADCRUMBS;

   ngOnInit() {
   }

}
