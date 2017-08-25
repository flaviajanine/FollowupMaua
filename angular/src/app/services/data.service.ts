import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AppError } from './../common/app-error'
import {NotFoundError} from './../common/not-found-error'
import 'rxjs/add/operator/catch';
// factories
import 'rxjs/add/observable/throw';

@Injectable()

// é aqui que vem os dados do banco de dados do php!!
// aqui só lida com os requests http.

export class DataService {

  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) {}

  getPosts() {
     return this.http.get(this.url);
  }
  
  postForm(post) {
    return this.http.post(this.url, JSON.stringify(post))
    .catch((error: Response) => {
      if (error.status === 404)
        return Observable.throw(new NotFoundError());
      return Observable.throw(new AppError(error));
    });
  }

}
