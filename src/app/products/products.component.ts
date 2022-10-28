import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IWarehouseItem } from '../main/warehouse.model';
import { WarehouseService } from '../services/warehouse.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit {

  constructor(
    private warehouseService: WarehouseService,
    ) { }

  public _itemlist: IWarehouseItem[] = [];

  ngOnInit(): void {
      this.warehouseService.get_items().subscribe(
        (data: any) => {
          this._itemlist = [...data];
          console.log(this._itemlist);
        }
      )
    }
  }
