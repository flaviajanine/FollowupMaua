import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PredictService {

  constructor(
    private http: Http
  ) { }

  getPredictions(P){

    switch(P){
      case "1":
      {
        this.http.get('./getnotaP2.php').subscribe();
        this.http.get('./getnotaP3.php').subscribe();
        this.http.get('./getnotaP4.php').subscribe();
        break;
      }
      case "2":
      {
        this.http.get('./getnotaP3.php').subscribe();
        this.http.get('./getnotaP4.php').subscribe();
        break;
      }
      case "3":
      {
        this.http.get('./getnotaP4.php').subscribe();
        break;
      }
      
    }

  }

}
