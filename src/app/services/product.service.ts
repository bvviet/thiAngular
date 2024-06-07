import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { productType } from '../types/product.type';
import { productForm } from '../types/product.type';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'http://localhost:3000/products';
  http = inject(HttpClient);
  constructor() {}
  // Get all
  getAll() {
    return this.http.get<productType[]>(this.apiUrl);
  }
  // Get detail
  getDetail(id: string) {
    return this.http.get<productType>(`${this.apiUrl}/${id}`);
  }
  // post
  postProduct(data: productForm) {
    return this.http.post(this.apiUrl, data);
  }
  // update
  putProduct(id: string, data: productForm) {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }
  // delete
  deleteProduct(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
