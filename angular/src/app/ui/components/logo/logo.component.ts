import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { ApiService } from './../../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'logo',
  templateUrl: 'logo.component.html',
  styleUrls: ['logo.component.scss'],
  host: {'class': 'app-logo'}
})
export class LogoComponent implements OnInit {
  constructor(
    private apiservice: ApiService,
    private router: Router
  ) {}

  ngOnInit() {}

  home(){
    this.apiservice.getData()
    .subscribe((res: Response) => {
      let response = res.json();

          switch (response.CATEGORIA) {
            case "0": {
              this.router.navigate(['/default-layout/dashboard']);
              break;
            }
            case "1": {
              this.router.navigate(['/default-layout/dashboard-2']);
              break;
            }
            case "2": {
              this.router.navigate(['/default-layout/dashboard-3']);
              break;
            }
          }
    })

  }
}