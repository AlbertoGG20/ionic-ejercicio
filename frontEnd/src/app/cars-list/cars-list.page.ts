import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/car.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.page.html',
  styleUrls: ['./cars-list.page.scss'],
})
export class CarsListPage implements OnInit {
  message = "";
  cars: any = [];

  constructor(private carService: CarService, private router: Router, private modalCtr: ModalController) { }

  ngOnInit() { }

  ionViewWillEnter() {
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
    this.carService.update(id, data).subscribe(() => {
      this.getCars();
    })
  }


  //Redirections
  gotoCarsForm() {
    this.router.navigateByUrl('/cars-form');
  };

  gotoCarsHome() {
    this.router.navigateByUrl('/');
  };

  gotoCarsList() {
    this.router.navigateByUrl('/cars-list');
  }

  //modal menu
  async openModal(car: any) {
    const modal = await this.modalCtr.create({
      component: ModalComponent,
      componentProps: { car },
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm' && data) {
      this.updateCar(car.id, data);
    }
  }


}
