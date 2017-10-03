import { Http } from '@angular/http';
import { Component, OnInit, ElementRef } from '@angular/core';
import { SharedService } from '../../../layouts/shared-service';
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

@Component({
  selector: 'page-dashboard-3',
  templateUrl: './dashboard-3.component.html',
  styleUrls: ['./dashboard-3.component.scss']
})


const URL = './../../file/functions.php';

export class PageDashboard3Component implements OnInit {
  pageTitle: string = 'Dashboard Admin';
  private chart: any;
 
  constructor( private _sharedService: SharedService,
               private http: Http, 
               private el: ElementRef ) {
    this._sharedService.emitChange(this.pageTitle);
    
  }


  ngOnInit() {
  }
  ngOnDestroy() {
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
      arc : {
        borderWidth: 0
      }
    },
    tooltips: false
  };

  upload() {
    let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#photo');
    console.log("iam+ "+inputEl);
    let fileCount: number = inputEl.files.length;
    let formData = new FormData();
    if (fileCount > 0) { // a file was selected
        for (let i = 0; i < fileCount; i++) {
            formData.append('photo', inputEl.files.item(i));
        }
        this.http
            .post(URL, formData).map((res:any) => res).subscribe(
                (success) => {
                 alert(success._body);
              },
                (error) => alert(error)
            );

    }
   }

}