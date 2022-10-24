import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IFormData } from '../main/warehouse.model';

@Injectable({
  providedIn: 'root'
})


export class WarehouseService {

  constructor(private http: HttpClient) { }
  
  public get_items() {
    return this.http.get('http://localhost:8000/')
  }

  public push_form(body: IFormData) {
    return this.http.post('http://localhost:8000/form', body)
  }
}
