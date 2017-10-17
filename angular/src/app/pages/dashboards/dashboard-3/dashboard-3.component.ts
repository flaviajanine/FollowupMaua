import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { Component, OnInit, ElementRef } from '@angular/core';
import { SharedService } from '../../../layouts/shared-service';
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import 'rxjs/add/operator/catch';

@Component({
  selector: 'page-dashboard-3',
  templateUrl: './dashboard-3.component.html',
  styleUrls: ['./dashboard-3.component.scss']
})


export class PageDashboard3Component implements OnInit {
  pageTitle: string = 'Administrador';
  private chart: any;
  form: FormGroup;
  email: FormControl;

  constructor(private _sharedService: SharedService,
              private elem: ElementRef,
              private http: Http) {
    this._sharedService.emitChange(this.pageTitle);

  }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', Validators.email)
    });
    
  }
  ngOnDestroy() {

  }

  public uploadFile(): void {
    let url = './fileUpload.php';
    let files = this.elem.nativeElement.querySelector('#selectFile').files;
    let formData = new FormData();
    let file = files[0];
    formData.append('selectFile', file);
    console.log(formData);
      this.http.post(url, formData)
      .subscribe(
          data => {
            alert("Arquivo enviado com sucesso");
            console.log('success');
          },
          error => console.log(error)
      )
        
  }

  predict(){
      let url = './post.php';
      this.http.get(url)
      .subscribe();
      alert("Resultados enviados para o banco de dados");
  }

  relatorio(){
    this.http.get('./pdf.php')
    .subscribe(
      (res: Response) =>{
        if(res.json().File == "1"){
          console.log('Arquivo criado!');
          window.open('./alunos.pdf');
        }
      }
    );
  }

  onSubmit(){

    let body = this.form.value;
    console.log(body);
   
    this.http.post('./email.php',body)
    .subscribe(
      (res: Response) => {
         alert("E-mail enviado com sucesso!");
        },
      error => {
        console.log(error);
        alert("Erro no envio.");
      }
    );

  }

  // Pie
  public pieChartLabels: string[] = [
    'Angular',
    'PHP',
    'HTML'
  ];

  public pieChartData: any[] = [
    300,
    500,
    100
  ];

  public pieChartColors: any[] = [
    {
      backgroundColor: [
        "#778391",
        "#5dade0",
        "#3c4e62"
      ],
    }
  ];
  public pieChartType: string = 'pie';
  public pieChartOptions: any = {
    elements: {
      arc: {
        borderWidth: 0
      }
    },
    tooltips: false
  };


}