import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  endPoint: string = 'http://localhost:8080/api/cars';
  dataId: any = 0;

  constructor(private httpClient: HttpClient) { }

  getCars() {
    return this.httpClient.get(this.endPoint);
  }

  getOneCar(id: any) {
    return this.httpClient.get(`${this.endPoint}/${id}`);
  }

  deleteCar(id: string) {
    return this.httpClient.delete(`${this.endPoint}/${id}`);
  }

  createCar(data: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const body = new URLSearchParams();
    body.append('brand', data.brand);
    body.append('model', data.model);
    body.append('fuel', data.fuel);
    body.append('year', data.year);
    body.append('hs', data.hs);

    return this.httpClient.post(this.endPoint, body.toString(), { headers });
  }

  update(id: any, data: any) {
    return this.httpClient.put(`${this.endPoint}/${id}`, data);


  }
}
