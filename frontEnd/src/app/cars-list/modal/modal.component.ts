import { Component } from '@angular/core';
import { CarService } from 'src/app/services/car.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  id: any = this.carService.dataId
  brand: string = this.id.model;
  model: string = this.id.model;


  constructor(private modalCtrl: ModalController, private carService: CarService) { }



  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(this.brand, 'confirm');
  }

}

