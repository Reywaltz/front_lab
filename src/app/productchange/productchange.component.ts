import { Component, OnInit } from '@angular/core';
import {
    AbstractControl,
    FormControl,
    FormGroup,
    ValidationErrors,
    Validators,
} from '@angular/forms';
import { Countries, countries } from 'src/assets/countries';
import { IWarehouseItem } from '../main/warehouse.model';
import { WarehouseService } from '../services/warehouse.service';

@Component({
    selector: 'app-productchange',
    templateUrl: './productchange.component.html',
    styleUrls: ['./productchange.component.less'],
})
export class ProductchangeComponent implements OnInit {
    constructor(private warehouseService: WarehouseService) {
        this.warehouseService = warehouseService;
    }

    public countries: Countries[] = countries;
    public _itemlist: IWarehouseItem[] = [];
    public statusModel = '';
    public editProductForm: FormGroup = {} as FormGroup;

    ngOnInit(): void {
        this.warehouseService.get_items().subscribe((data: any) => {
            this._itemlist = [...data];
            console.log(this._itemlist);
        });

        this.editProductForm = new FormGroup({
            productValue: new FormControl('', [Validators.required]),
            statusValue: new FormControl('', [Validators.required]),
        });
    }

    public CustomValidator(control: AbstractControl): ValidationErrors | null {
        const name = control.get('nameValue');
        const money = control.get('MoneyValue');
        const country = control.get('countryValue');
        const developer = control.get('developerValue');
        const color = control.get('colorValue');
        const place = control.get('placeValue');

        let check = Boolean(
            name?.value ||
                money?.value ||
                country?.value ||
                developer?.value ||
                color?.value ||
                place?.value
        );

        return check ? { dataInputed: false } : { dataInputed: true };
    }

    onFormSubmit(): void {
        let values = this.editProductForm.value
        let product_id = values.productValue.id
        let body = {"status": values.statusValue};
        console.log(body)
        this.warehouseService.changeProductStatus(product_id, body).subscribe((body: any) => {
            console.log(body);
        });
    }
}
