import { LogoutService } from './../../../services/logout.service';
import { Response } from '@angular/http';
import { ApiService } from './../../../services/api.service';
import { Router } from '@angular/router';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'horizontal-navbar',
  templateUrl: 'horizontal-navbar.component.html',
  styleUrls: ['horizontal-navbar.component.scss'],
  host: {
    '[class.app-navbar]': 'true',
    '[class.show-overlay]': 'showOverlay'
  }
})
export class HorizontalNavbarComponent implements OnInit {
  @Input() title: string;
  @Input() openedSidebar: boolean;
  @Output() sidebarState = new EventEmitter();
  showOverlay: boolean;
  nome: string;
  cat: string;

  constructor(
    private router: Router,
    private apiservice: ApiService,
    private logoutservice: LogoutService
  ) {
    this.openedSidebar = false;
    this.showOverlay = false;
    this.apiservice.getData()
    .subscribe( (res: Response) =>
    {
      let data = res.json();      
      this.nome = data.NOME; 
      this.cat = data.CATEGORIA; 

    }
   ); 

  }

  ngOnInit() {


      
  }

  home(){
    
    switch (this.cat){
      case '0':
      this.router.navigate(['/default-layout/dashboard']);
      break;
      case '1':
      this.router.navigate(['/default-layout/dashboard-2']);
      break;
      case '2':
      this.router.navigate(['/default-layout/dashboard-3']);
      break;

    }

  }

  sair(){
    this.logoutservice.logout();
  }

  open(event) {
    let clickedComponent = event.target.closest('.nav-item');
    let items = clickedComponent.parentElement.children;

    event.preventDefault();

    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove('opened');
    }
    clickedComponent.classList.add('opened');

    //Add class 'show-overlay'
    this.showOverlay = true;
  }

  close(event) {
    let clickedComponent = event.target;
    let items = clickedComponent.parentElement.children;

    event.preventDefault();

    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove('opened');
    }

    //Remove class 'show-overlay'
    this.showOverlay = false;
  }

  openSidebar() {
    this.openedSidebar = !this.openedSidebar;
    this.sidebarState.emit();
  }
}
