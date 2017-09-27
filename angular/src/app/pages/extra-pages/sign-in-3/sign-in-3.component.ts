import { Http, Response } from '@angular/http';
import { LoginService } from './../../../services/login.service';
import { Component, OnInit, NgModule, Pipe, } from '@angular/core';
import { ReactiveFormsModule, 
          FormsModule, 
          FormGroup, 
          FormControl, 
          Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Router } from '@angular/router';

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
  private url = './../../api/validar_acesso.php';   

    ngOnInit() { 
      this.createFormControls();
      this.createForm();     
  }

  constructor(
    private http: Http,
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
          
         this.http.post(this.url, body)
            .map((res: Response) => 
              {
                 let response = res.json();
                 
                 if (response.Error === "0"){

                 if (response.Categoria != "Invalida"){
                 
                switch(response.Categoria) {
                  case "0": {
                    this.router.navigate(['/default-layout/dashboard']);
                    break;
                  }
                  case "1":{
                    this.router.navigate(['/default-layout/dashboard-2']);
                    break;
                  }
                  case "2":{
                    this.router.navigate(['/default-layout/dashboard-3']);
                    break;
                  }                 
                }
              }
            }else{
              alert('Login inválido.');
            }
              }) 
         .subscribe( postbody => {
          body = postbody;       
        },
        error => {
          alert('Erro!'); 
          console.log(error);
        });
   }
}
