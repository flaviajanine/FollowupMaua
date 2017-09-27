import { Component, OnInit, NgModule, Pipe, } from '@angular/core';
import { ReactiveFormsModule, 
          FormsModule, 
          FormGroup, 
          FormControl, 
          Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';
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
  idcursos: FormControl;
  email: FormControl;
  senha: FormControl;
  confirmarSenha: FormControl;
  private url = './../../api/cadastrarAluno.php';
  
    ngOnInit() { 
      this.createFormControls();
      this.createForm();     
  }
  
 constructor(
   private router: Router,
   private http: Http
  ){}
 

     onSubmit() {
     let body = this.form.value;

     console.log(body);
  
     this.http.post(this.url, body)
     .map( (res: Response) =>
     {
      let response = res.json();

      if (response.Senha != "1"){

        if (response.Email === "1"){
        alert('Email já cadastrado');
        this.form.reset;
      }
      else
      {
      alert('Cadastrado com sucesso!')
      this.router.navigate(['/extra-layout/sign-in-social'])
      }
    }else{
      alert('Senhas incompatíveis');
      this.form.reset;
    }

     })
     .subscribe( postbody => {
      body = postbody;    
    },
    error => {
      alert('Erro!'); 
      console.log(error);
    })

    }    
    

    createForm(){
      this.form = new FormGroup({
        ra: this.ra,
        nome: this.nome,
        idcursos: this.idcursos,
        email: this.email,
        senha: this.senha,
        confirmarSenha: this.confirmarSenha, 

      })
    }

    createFormControls(){
        this.ra = new FormControl('', Validators.required);
        this.nome = new FormControl('', Validators.required);
        this.idcursos = new FormControl('', Validators.required);
        this.email = new FormControl('', Validators.email);
        this.senha = new FormControl('', Validators.minLength(6));
        this.confirmarSenha = new FormControl('', Validators.minLength(6));
    }

    
}

