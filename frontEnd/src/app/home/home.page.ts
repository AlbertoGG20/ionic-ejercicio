import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) { }

  //Redirections
  gotoCarsForm() {
    this.router.navigateByUrl('/cars-form');
  }

  gotoCarsList() {
    this.router.navigateByUrl('/cars-list');
  }

  gotoCarsHome() {
    this.router.navigateByUrl('/');
  };

}
