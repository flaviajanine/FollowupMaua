import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';
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
  private url: './../../api/sair.php';

  constructor(
    private http: Http,
    private router: Router
  ) {
    this.openedSidebar = false;
    this.showOverlay = false;
  }

  ngOnInit() {
        
    this.nome = "Flávia Janine";

  }

  sair(){
    this.http.get(this.url)
    .map((res: Response) =>
     { 
       let response = res.json();

       if(response.Msg === "saiu"){
          this.router.navigate(['/extra-layout/sign-in-social']);
       }

      }
  )
    .subscribe();
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
