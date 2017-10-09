import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';


@Injectable()
export class LogoutService {

  constructor( private http: Http,
               private router: Router
              ) { }

  private url = './sair.php';
  private logged = true;

  logout(){
    this.http.get(this.url)
    .subscribe((res: Response) =>
    {
     let data = res.json();
     if(data.Msg === "saiu"){
      this.router.navigate(['/extra-layout/sign-in-social']);
      this.logged = false;
     }
    })
  }

  isloggged(){

    if (this.logged === false) return false;
    return true;
  }

}
