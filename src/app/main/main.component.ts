import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WarehouseService } from '../services/warehouse.service';
import { IFormData, IWarehouseItem } from './warehouse.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {

  constructor(
    private warehouseService: WarehouseService,
    private routerService: Router
    ) { }

  // С нижним _ в шаблоне
  public _itemlist: IWarehouseItem[] = [];


  
  public loginForm: IFormData = {
    login: 'Имя',
    password: '',
  }


  ngOnInit(): void {   }

  public navigate_products() {
    this.routerService.navigateByUrl('products')
  }

  public getformdata() {
    this.warehouseService.push_form(this.loginForm).subscribe(
      (data: any) => {
        console.log(data);
      }
    )
  }
}

