import { LoginService } from './../../services/login.service';
import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthAluno implements CanActivate{

  constructor(
    private loginservice: LoginService,
    private router: Router
  ) { }

  canActivate(){
    if(this.loginservice.isAluno()) return true;

    this.router.navigate(['/default-layout/dashboard']);
    return false;

  }
}
