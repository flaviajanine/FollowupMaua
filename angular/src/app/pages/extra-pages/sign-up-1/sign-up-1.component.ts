import { Component, OnInit, NgModule, Pipe, } from '@angular/core';
import { ReactiveFormsModule, 
          FormsModule, 
          FormGroup, 
          FormControl, 
          Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NomeValidators } from './../../../common/validators/nome.validators';
//import { DataService } from './../../../services/data.service';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

// decorator 
@Component({
  selector: 'page-sign-up-1',
  // o html associado a esse componente
  templateUrl: './sign-up-1.component.html',
  styleUrls: ['./sign-up-1.component.scss']

})

// aqui é onde vão as propertys e as dependencies injections 
export class PageSignUp1Component implements OnInit {

  body: any[];
  form: FormGroup;
  ra: FormControl;
  nome: FormControl;
  curso: FormControl;
  email: FormControl;
  senha: FormControl;
  confirmarSenha: FormControl;
  
    ngOnInit() { 
      this.createFormControls();
      this.createForm();     
  }
  
 // constructor(private service: DataService,
 // private router: Router) {} 
 
 constructor(private http: Http, private router: Router){}
 
 private url = 'http://localhost/mauAcompanha/cadastrar.php';
 //private url = 'https://testemauacompanha123.mybluemix.net/cadastrar.php';

    onSubmit() {
     let body = this.form.value;

     console.log(body);
    
     this.http.post(this.url, body)
     .map(Response => Response)
     .subscribe( postbody => {
      body = postbody;
      alert('Cadastrado com sucesso!');
      console.log(postbody);
      console.log(Response);
      this.router.navigate(['/extra-layout/sign-in-social']);
    },
    error => {
      alert('Erro!'); 
      console.log(error);
    });

    }    
    

    createForm(){
      this.form = new FormGroup({
        ra: this.ra,
        nome: this.nome,
        curso: this.curso,
        email: this.email,
        senha: this.senha,
        confirmarSenha: this.confirmarSenha, 

      })
    }

    createFormControls(){
        this.ra = new FormControl('', Validators.required);
        this.nome = new FormControl('', Validators.required);
        this.curso = new FormControl('', Validators.required);
        this.email = new FormControl('', Validators.email);
        this.senha = new FormControl('', Validators.minLength(6));
        this.confirmarSenha = new FormControl('', Validators.minLength(6));
    }

    
}

