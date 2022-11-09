import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IPlacement, IWarehouseItem } from '../main/warehouse.model';
import { WarehouseService } from '../services/warehouse.service';

@Component({
    selector: 'app-productchangeplace',
    templateUrl: './productchangeplace.component.html',
    styleUrls: ['./productchangeplace.component.less'],
})
export class ProductchangeplaceComponent implements OnInit {
    constructor(private warehouseService: WarehouseService) {
        this.warehouseService = warehouseService;
    }

    public _itemlist: IWarehouseItem[] = [];
    public placeModel = '';
    public freeSpaces: IPlacement[] = [];
    public editProductPlaceForm: FormGroup = {} as FormGroup;

    ngOnInit(): void {
        this.warehouseService.get_items().subscribe((data: any) => {
            this._itemlist = [...data];
        });

        this.editProductPlaceForm = new FormGroup({
            productValue: new FormControl('', [Validators.required]),
            placeValue: new FormControl('', [Validators.required]),
        });

        this.warehouseService.get_places().subscribe((data: any) => {
            this.freeSpaces = [...data];
        });
    }

    onFormSubmit(): void {
        let placeId = this.editProductPlaceForm.value['placeValue'];
        let product = this.editProductPlaceForm.value['productValue'];
        this.warehouseService
            .changeProductPlace(placeId.id, product)
            .subscribe((body: any) => {});
    }
}
