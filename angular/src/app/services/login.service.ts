import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  constructor(
    private http: Http,
    private router: Router
  ) { }

  private url = './validar_acesso.php';
  private isaluno = false;
  private isprof = false;
  private isadmin = false;

  login(body) {
    this.http.post(this.url, body)
      .map((res: Response) => {
        let response = res.json();

        if (response.Error === "0") {

          if (response.Categoria != "Invalida") {

            switch (response.Categoria) {
              case "0": {
                this.router.navigate(['/default-layout/dashboard']);
                this.isaluno = true;
                break;
              }
              case "1": {
                this.router.navigate(['/default-layout/dashboard-2']);
                this.isprof = true;
                break;
              }
              case "2": {
                this.router.navigate(['/default-layout/dashboard-3']);
                this.isadmin = true;
                break;
              }
            }
          }
        } else {
          alert('Login inválido.');
        }
      })
      .subscribe(postbody => {
        body = postbody;
      },
      error => {
        alert('Erro!');
        console.log(error);
      });

  }

  isAluno(){
    if (this.isaluno === true) return true;
    return false;
  }

  isProf(){
    if (this.isprof === true) return true;
    return false;
  }

  isAdmin(){
    if (this.isadmin === true) return true;
    return false;
  }
}
