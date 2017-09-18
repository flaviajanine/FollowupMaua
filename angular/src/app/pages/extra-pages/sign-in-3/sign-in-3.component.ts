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
//import { CadastroService } from './../../../services/cadastro.service';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

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
  
    ngOnInit() { 
      this.createFormControls();
      this.createForm();     
  }
//private service: CadastroService,
  constructor(
    private http: Http,
    private router: Router) { }
    private url = './../../login.php';
    
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
        
         this.http.post(this.url, body)
         .map(Response => Response)
         .subscribe( postbody => {
          body = postbody;
          //alert('Login efetuado com sucesso com sucesso!');
          console.log(postbody);
          console.log(Response);
          this.router.navigate(['default-layout/dashboard']);
        },
        error => {
          alert('Erro!'); 
          console.log(error);
        });
   }
}
