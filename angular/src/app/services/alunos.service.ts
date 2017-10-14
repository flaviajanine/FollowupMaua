import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AlunosService {

  constructor(
    private http: Http
  ) { }

  getnotaAluno(){
    return this.http.get('./infoAluno.php');
  }

}
