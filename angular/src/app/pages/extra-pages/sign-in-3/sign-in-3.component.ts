import { Component, OnInit, NgModule, Pipe, } from '@angular/core';
import { ReactiveFormsModule, 
          FormsModule, 
          FormGroup, 
          FormControl, 
          Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Router } from '@angular/router';
import { AutenticService } from './../../../services/autentic.service';

@Component({
  selector: 'page-sign-in-3',
  templateUrl: './sign-in-3.component.html',
  styleUrls: ['./sign-in-3.component.scss']
})
export class PageSignIn3Component implements OnInit {

  body: any[];
  form: FormGroup;
  email: FormControl;
  senha: FormControl;
  loginInvalido: boolean; 
  
    ngOnInit() { 
      this.createFormControls();
      this.createForm();     
  }

  constructor(
    private service: AutenticService,
    private router: Router) { }
   
    
    createForm(){
      this.form = new FormGroup({
        email: this.email,
        senha: this.senha
      })
    }

    createFormControls(){
        this.email = new FormControl('', Validators.required);
        this.senha = new FormControl('', Validators.required);
    }

  onSubmit() {
    let body = this.form.value;
    
         console.log(body);
        
         this.service.login(body)        
         .subscribe( postbody => {
          body = postbody;
          if(postbody){
            this.router.navigate(['default-layout/dashboard']);
          }else{
            this.loginInvalido = true;
          }
          console.log(postbody);
          console.log(Response);
        
        },
        error => {
          alert('Erro!'); 
          console.log(error);
        });
   }
}
