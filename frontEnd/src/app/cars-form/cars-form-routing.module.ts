import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarsFormPage } from './cars-form.page';

const routes: Routes = [
  {
    path: '',
    component: CarsFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarsFormPageRoutingModule {}
