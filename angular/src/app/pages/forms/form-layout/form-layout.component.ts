import { Component, OnInit } from '@angular/core';
import { DataService } from './../../../services/data.service';

const BREADCRUMBS: any[] = [
  {
    title: 'Main',
    link: '#/default-layout/dashboard'
  },
  {
    title: 'Notas',
    link: '#/default-layout/form-layout'
  },
  {
    title: 'Inserir notas',
    link: ''
  }
];

// aqui só lida com a lógica por trás da view (HTML) desse componente

@Component({
  selector: 'app-form-layout',
  templateUrl: './form-layout.component.html',
  styleUrls: ['./form-layout.component.scss']
})
export class PageFormLayoutComponent implements OnInit {
  pageTitle: string = 'Inserir notas';
  breadcrumb: any[] = BREADCRUMBS;

   ngOnInit() {
   }
/*
  posts: any[];
  
  constructor(private service: DataService) {
  }

  ngOnInit() {
    this.service.getPosts()
      .subscribe(
        response => {
        this.posts = response.json();
      },
        error => {
        alert('An unexpected error occurred.');
        console.log(error);
      });
  }
    create(titleinput: HTMLInputElement){
    let post = { title: titleinput.value};
    titleinput.value = '';

  
   this.service.createPost(post).subscribe(response => {
      post['id'] = response.json().id;
      this.posts.splice(0,0,post);
      console.log(response.json());
    },
     (error: Response) => {
       if (error.status === 400) {}
       // this.form.setErros(error.json());
       else{
      alert('An unexpected error occurred.');
      console.log(error);
       }
     });
     
    }
    */
}
