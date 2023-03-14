import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from '../_models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl: string = "https://www.tothpeter-api.hu/productCRUD/products"

  constructor(private http: HttpClient) { }

  getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>(`${this.apiUrl}`);
  }

  deleteProductById(id: number):Observable<any>{
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  
  addNewProduct(product: Product):Observable<Product>{
    return this.http.post<Product>(`${this.apiUrl}`,JSON.stringify(product));
  }
  
  updateProduct(id: number, product: Product):Observable<any>{
    return this.http.patch<Product>(`${this.apiUrl}/${id}`,JSON.stringify(product));
  }
  
  getProductById(id: number):Observable<Product>{
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }
  
}
