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
  message = "prueba de las pruebas";
  cars: any = [];



  constructor(private carService: CarService, private router: Router, private modalCtr: ModalController) { }

  ngOnInit() {
    this.getCars();
  }

  async openModal(id: any) {
    this.carService.update(id)
    const modal = await this.modalCtr.create({
      component: ModalComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      this.message = `Hello, ${data}!`;
    }
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
    this.carService.update(id)/* .subscribe(() => {
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
