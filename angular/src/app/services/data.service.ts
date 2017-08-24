import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()

// é aqui que vem os dados do banco de dados do php!!
// aqui só lida com os requests http.

export class DataService {

  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) {}

  getPosts() {
     return this.http.get(this.url);
  }
  
  createPost(post) {
    return this.http.post(this.url, JSON.stringify(post));
  }

}
