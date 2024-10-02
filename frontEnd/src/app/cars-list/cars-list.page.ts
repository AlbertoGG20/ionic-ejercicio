import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/car.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.page.html',
  styleUrls: ['./cars-list.page.scss'],
})
export class CarsListPage implements OnInit {

  cars: any = [];



  constructor(private carService: CarService, private router: Router) { }

  ngOnInit() {
    this.getCars();
  }



  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response;
    });
  }

  deleteCar(id: any) {
    this.carService.deleteCar(id).subscribe(() => {
      this.getCars();
    });
  }

  updateCar(id: any, data: any) {
    this.carService.update(id, data)/* .subscribe(() => {
      this.getCars();
    }) */
  }


  gotoCarsForm() {
    this.router.navigateByUrl('/cars-form');
  };

  gotoCarsHome() {
    this.router.navigateByUrl('/');
  };

}
