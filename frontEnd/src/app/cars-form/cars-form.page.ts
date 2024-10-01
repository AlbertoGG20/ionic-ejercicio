import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarService } from '../services/car.service';
import { Validator } from '@angular/forms';

@Component({
  selector: 'app-cars-form',
  templateUrl: './cars-form.page.html',
  styleUrls: ['./cars-form.page.scss'],
})
export class CarsFormPage implements OnInit {

  carForm: FormGroup

  constructor(public formBuilder: FormBuilder,
    private carService: CarService,
    private route: Router
  ) {
    this.carForm = this.formBuilder.group({
      brand: ['', Validators.compose([Validators.required])],
      model: ['', Validators.compose([Validators.required])],
    });
  }

  ngOnInit() { }

  createCar() {
    if (this.carForm.valid) {
      console.log('Formulario valido', this.carForm.value);
      this.carService.createCar(this.carForm.value).subscribe(response => {
        this.route.navigate(['/cars-list']);
      })
    } else {
      console.log('Formulario no valido');
    }
  }

  getFormControl(field: string) {
    return this.carForm.get(field);
  }
}
