import { Component, OnInit } from '@angular/core';
import { IWarehouseItem } from '../main/warehouse.model';
import { WarehouseService } from '../services/warehouse.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.less'],
})
export class ProductsComponent implements OnInit {
    constructor(private warehouseService: WarehouseService) {}

    public _itemlist: IWarehouseItem[] = [];
    public nameModel = '';
    public moneyModel = '';
    public statusModel = '';
    public countryModel = '';
    public colorModel = '';
    public developerModel = '';
    readonly columns = [
        'id',
        'name',
        'cost',
        'color',
        'country',
        'developer',
        'type',
        'number',
        'status',
    ];

    ngOnInit(): void {
        this.warehouseService.get_items().subscribe((data: any) => {
            this._itemlist = [...data];
        });
    }
}
