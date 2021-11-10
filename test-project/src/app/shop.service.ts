import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<any> {
    const url = 'https://fakestoreapi.com/products';
    const headers = new HttpHeaders({
      myData: 'Something',
    });
    const params = new HttpParams().set('limit', 5).set('hi', 2);
    return this.httpClient.get<any>(url, { headers, params });
  }

  addProduct(data: any): Observable<any> {
    const url = 'https://fakestoreapi.com/products';
    return this.httpClient.post<any>(url, data);
  }

  updateProduct(id: number, data: any): Observable<any> {
    const url = `https://fakestoreapi.com/products/${id}`;
    return this.httpClient.patch<any>(url, data);
  }

  deleteProduct(id: number): Observable<any> {
    const url = `https://fakestoreapi.com/products/${id}`;
    return this.httpClient.delete<any>(url);
  }
}
