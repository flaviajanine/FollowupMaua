import { Component, OnInit, NgModule, Pipe, } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import { DataService } from './../../../services/data.service';


// decorator 
@Component({
  selector: 'page-sign-up-1',
  // o html associado a esse componente
  templateUrl: './sign-up-1.component.html',
  styleUrls: ['./sign-up-1.component.scss']

})

// aqui é onde vão as propertys e as dependencies injections 
export class PageSignUp1Component implements OnInit {

  constructor(private service: DataService) {
  }

  ngOnInit() { 

    this.myform = new FormGroup({
      name: new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
      }),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
      language: new FormControl()
    });
  }

   onSubmit() {


    

   }
}
