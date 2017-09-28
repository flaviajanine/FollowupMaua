import { LoginService } from './../../services/login.service';
import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthAdmin implements CanActivate{

  constructor(
    private loginservice: LoginService,
    private router: Router
  ) { }

  canActivate(){
    if(this.loginservice.isAdmin()) return true;

    this.router.navigate(['/default-layout/dashboard-3']);
    return false;

  }
}
