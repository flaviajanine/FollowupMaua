import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()

// é aqui que vem os dados do banco de dados do php!!
// aqui só lida com os requests http.

export class DataService {

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private url: string, private http: Http) { }
  
    getAll() {
      return this.http.get(this.url)
        .map(response => response.json())
        .catch(this.handleError);
    }
  
    create(resource) {
      return this.http.post(this.url, resource)
      .map(response => response.json())
      .catch(this.handleError);
    }
  
    update(resource) {
      return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
        .map(response => response.json())      
        .catch(this.handleError);
    }
  
    delete(id) {
      return this.http.delete(this.url + '/' + id)
        .map(response => response.json())
        .catch(this.handleError);
    }
  
    // só pra ser visto nesse classe. o consumidor desse serviço
    // não precisa saber dele, só dos CRUDs.
    private handleError(error: Response) {
      if (error.status === 400)
        return Observable.throw(error.json());
    
      if (error.status === 404)
        return Observable.throw(error.json());
      
      return Observable.throw(error.json());
    }

}
