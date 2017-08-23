import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../layouts/shared-service';

const BREADCRUMBS: any[] = [
  {
    title: 'Main',
    link: '#'
  },
  {
    title: 'Notas',
    link: '#'
  },
  {
    title: 'Inserir notas',
    link: ''
  }
];
@Component({
  selector: 'app-form-layout',
  templateUrl: './form-layout.component.html',
  styleUrls: ['./form-layout.component.scss']
})
export class PageFormLayoutComponent implements OnInit {
  pageTitle: string = 'Inserir notas';
  breadcrumb: any[] = BREADCRUMBS;

  constructor( private _sharedService: SharedService ) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {}
}
