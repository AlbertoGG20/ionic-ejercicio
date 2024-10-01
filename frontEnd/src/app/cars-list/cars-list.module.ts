import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarsListPageRoutingModule } from './cars-list-routing.module';

import { CarsListPage } from './cars-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CarsListPageRoutingModule
  ],
  declarations: [CarsListPage]
})
export class CarsListPageModule { }
