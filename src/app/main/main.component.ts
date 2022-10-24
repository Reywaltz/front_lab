import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { WarehouseService } from '../services/warehouse.service';
import { IFormData, IWarehouseItem } from './warehouse.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {

  constructor(private warehouseService: WarehouseService) { }

  // С нижним _ в шаблоне
  public _itemlist: IWarehouseItem[] = [];


  
  public loginForm: IFormData = {
    login: 'Имя',
    password: '',
  }


  ngOnInit(): void { 
    this.warehouseService.get_items().subscribe(
      (data: any) => {
        this._itemlist = [...data];
        console.log(1);
      }
    )
  }

  public getformdata() {
    this.warehouseService.push_form(this.loginForm).subscribe(
      (data: any) => {
        console.log(data);
      }
    )
  }
}

