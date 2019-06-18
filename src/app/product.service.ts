import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './models/product';
import { map } from "rxjs/operators";
const apiUrl = "http://localhost:4200/api"

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts$(): Observable<Product[]> {
    return this.http.get(`${apiUrl}/products`)
    //.pipe(map(res => res.json()));
    .pipe(map((response: Product[] )=> {
      return response;
    }))
  }

  private getRandomNumberInRange(r) {
    return Math.floor(Math.random() * r);
  }
  getRandomProducts$(nb): Observable<Product[]> {
    return this.http.get(`${apiUrl}/products`)
    //.pipe(map(res => res.json()));
    .pipe(map((response: Product[] )=> {
      let filteredArr = [];
      filteredArr.push(response[this.getRandomNumberInRange(response.length)])
      filteredArr.push(response[this.getRandomNumberInRange(response.length)])
      filteredArr.push(response[this.getRandomNumberInRange(response.length)])
      return filteredArr;
    }))
  }
}
