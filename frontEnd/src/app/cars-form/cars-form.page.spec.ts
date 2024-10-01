import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CarsFormPage } from './cars-form.page';

describe('CarsFormPage', () => {
  let component: CarsFormPage;
  let fixture: ComponentFixture<CarsFormPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
