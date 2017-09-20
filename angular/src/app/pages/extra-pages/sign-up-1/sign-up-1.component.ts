import { Component, OnInit, NgModule, Pipe, } from '@angular/core';
import { ReactiveFormsModule, 
          FormsModule, 
          FormGroup, 
          FormControl, 
          Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Router } from '@angular/router';
import { CadastroService } from './../../../services/cadastro.service';

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
  
 constructor(
   private service: CadastroService, 
   private router: Router){}
 

 
    onSubmit() {
     let body = this.form.value;

     console.log(body);
  
     this.service.cadastrar(body)
     .subscribe( postbody => {
      body = postbody;
      
      console.log(postbody);
      console.log(Response);
      alert('Cadastrado com sucesso!')
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

