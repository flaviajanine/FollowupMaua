import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {

  constructor( private http: Http ) { }

  private url = './infos.php';
 
  getData() {
    return this.http.get(this.url); 
  }
 
}
