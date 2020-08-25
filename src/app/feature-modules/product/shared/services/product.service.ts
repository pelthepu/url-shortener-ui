import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { HttpParams, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _baseUrl = `${environment.serviceUrl}/product`;

  constructor(private _http: HttpClient) { }

  getProductList(): Observable<Product[]> {
    return this._http.get<any>(this._baseUrl);
  }

  getProductById(productId: number): Observable<Product> {
    return this._http.get<any>(`${this._baseUrl}/${productId}`);
  }

  addProduct(product: Product): Observable<Product[]> {
    return this._http.post<Product[]>(`${this._baseUrl}/create`, product);
  }

}
