import { LogoutService } from './../logout.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor( 
    private logoutservice: LogoutService,
    private router: Router
  ) { }

  canActivate(){
    if(this.logoutservice.isloggged()) return true;

    this.router.navigate(['/extra-layout/sign-in-social']);
    return false;

  }
}
