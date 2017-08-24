import { Component, OnInit } from '@angular/core';

// decorator 
@Component({
  selector: 'page-sign-up-1',
  // o html associado a esse componente
  templateUrl: './sign-up-1.component.html',
  styleUrls: ['./sign-up-1.component.scss']

})

// aqui é onde vão as propertys e as dependencies injections 
export class PageSignUp1Component implements OnInit {
  constructor() {

   }

  ngOnInit() { 

  }

  onSubmit() {


   }
}
