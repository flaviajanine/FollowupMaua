//import { Router, RouterLink } from '@angular/router';
import { Component, OnInit, NgModule, Pipe, } from '@angular/core';
import { ReactiveFormsModule, 
          FormsModule, 
          FormGroup, 
          FormControl, 
          Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NomeValidators } from './../../../common/validators/nome.validators';
import { CadastroService } from './../../../services/cadastro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'page-sign-in-3',
  templateUrl: './sign-in-3.component.html',
  styleUrls: ['./sign-in-3.component.scss']
})
export class PageSignIn3Component implements OnInit {

  body: any[];
  form: FormGroup;
  user: FormControl;
  senha: FormControl;
  
    ngOnInit() { 
      this.createFormControls();
      this.createForm();     
  }

  constructor(private service: CadastroService,
    private router: Router) { }

    
    createForm(){
      this.form = new FormGroup({
        user: this.user,
        senha: this.senha
      })
    }

    createFormControls(){
        this.user = new FormControl('', Validators.required);
        this.senha = new FormControl('', Validators.required);
    }

  onSubmit() {
    let body = this.form.value;
    
   this.service.create(body)
   .subscribe( postbody => {
     body = postbody;
     this.router.navigate(['/default-layout/dashboard']);
   },
   error => {
     alert('Erro!');      
 });

   }
}
