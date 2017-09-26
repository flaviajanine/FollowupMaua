import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class CadastroService {

  constructor(
    private http: Http,
  ) { }

  private url = './../../usuarioMaua.php';

  cadastrar(body){
    return this.http.post(this.url, body)
    .map(Response => Response);
  }
}
 

