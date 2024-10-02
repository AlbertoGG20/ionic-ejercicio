import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  endPoint: string = 'http://localhost:8080/api/cars';

  constructor(private httpClient: HttpClient) { }

  getCars() {
    return this.httpClient.get(this.endPoint);
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

    return this.httpClient.post(this.endPoint, body.toString(), { headers });
  }

  update(id: any, data: any) {
    /* return this.httpClient.put(`${this.endPoint}/${id}`, data); */
    alert(id + " " + data.brand + " " + data.model);

  }

  updateCar(id: any, data: any) {
    //completar
  }
}
