import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class CadastroService {

  constructor( private http: Http ) { }
  private url = './cadastrarAluno.php';
  

  cadastrar(body){
    return this.http.post(this.url, body);
  }
  
  
}
