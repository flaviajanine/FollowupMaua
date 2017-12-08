import { CadastroService } from './../../../services/cadastro.service';
import { Component, OnInit, NgModule, Pipe, } from '@angular/core';
import { ReactiveFormsModule, 
          FormsModule, 
          FormGroup, 
          FormControl, 
          Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Router } from '@angular/router';
import { Response } from '@angular/http';
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
  cursos = [
    {value: '1', viewValue: 'Engenharia Ciclo Básico'},
    {value: '2', viewValue: 'Engenharia da Computação'},
    {value: '3', viewValue: 'Engenharia de Controle e Automação'},
    {value: '4', viewValue: 'Engenharia Elétrica'},
    {value: '5', viewValue: 'Engenharia Eletrônica'},
    {value: '6', viewValue: 'Engenharia de Alimentos'},
    {value: '7', viewValue: 'Engenharia Química'},
    {value: '8', viewValue: 'Engenharia de Produção'},
    {value: '9', viewValue: 'Engenharia Civil'}
  ];
  
  
    ngOnInit() { 
      this.createFormControls();
      this.createForm();     
  }
  
 constructor(
   private router: Router,
   private cadastro: CadastroService
  ){}
 

     onSubmit() {
     let body = this.form.value;

     console.log(body);
  
     this.cadastro.cadastrar(body)
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

