import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProfsService {

  constructor(
    private http: Http
  ) { }

  getinfoProf(){
    return this.http.get('./infoProf.php');
  }
}
