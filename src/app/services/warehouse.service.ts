import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICreateProductForm, IStatusForm, IWarehouseItem } from '../main/warehouse.model';

@Injectable({
    providedIn: 'root',
})
export class WarehouseService {
    constructor(private http: HttpClient) {}

    public get_items() {
        return this.http.get('http://0.0.0.0:8000/api/v1/products');
    }

    public get_places() {
        return this.http.get('http://0.0.0.0:8000/api/v1/places')
    }

    public pushCreateProductForm(body: ICreateProductForm) {
      return this.http.post('http://localhost:8000/api/v1/product', body);
    }

    public changeProductPlace(place_id: number, body: IWarehouseItem) {
        return this.http.post(`http://localhost:8000/api/v1/place/${place_id}`, body)
    }

    public changeProductStatus(product_id: number, body: IStatusForm) {
        return this.http.post(`http://localhost:8000/api/v1/product/${product_id}`, body)
    }
}
