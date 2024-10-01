import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarsFormPageRoutingModule } from './cars-form-routing.module';

import { CarsFormPage } from './cars-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    CarsFormPageRoutingModule
  ],
  declarations: [CarsFormPage]
})
export class CarsFormPageModule { }
