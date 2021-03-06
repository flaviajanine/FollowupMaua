import { Response } from '@angular/http';
import { Router } from '@angular/router';
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
    private router: Router
  ) {}

  ngOnInit() {}

}