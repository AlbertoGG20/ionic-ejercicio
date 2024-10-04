import { Component, Input } from '@angular/core';
import { CarService } from 'src/app/services/car.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() car: any;

  brand: string = "";
  model: string = "";
  fuel: string = "";
  year: string = "";
  hs: string = "";


  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    // Inicializa los valores del formulario con los datos del auto recibido
    if (this.car) {
      this.brand = this.car.brand;
      this.model = this.car.model;
      this.fuel = this.car.fuel;
      this.year = this.car.year;
      this.hs = this.car.hs;
    }
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    const updatedCar = {
      ...this.car, // Mantén el resto de los datos del auto (por ejemplo, id)
      brand: this.brand,
      model: this.model,
      fuel: this.fuel,
      year: this.year,
      hs: this.hs,
    };
    return this.modalCtrl.dismiss(updatedCar, 'confirm');
  }
}
