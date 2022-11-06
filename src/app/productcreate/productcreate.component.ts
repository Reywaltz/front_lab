import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Countries, countries } from 'src/assets/countries';
import { WarehouseService } from '../services/warehouse.service';

@Component({
    selector: 'app-productcreate',
    templateUrl: './productcreate.component.html',
    styleUrls: ['./productcreate.component.less'],
})
export class ProductcreateComponent implements OnInit {
    constructor(private warehouseService: WarehouseService) {}

    public countries: Countries[] = countries;
    public addProductForm: FormGroup = {} as FormGroup


    ngOnInit(): void {
        this.addProductForm = new FormGroup({
            nameValue: new FormControl('', [
                Validators.required,
                Validators.minLength(3),
            ]),
            moneyValue: new FormControl('', [
                Validators.required,
                Validators.min(0),
            ]),
            countryValue: new FormControl('', Validators.required),
            developerValue: new FormControl('', [
                Validators.required,
                Validators.minLength(3),
            ]),
            colorValue: new FormControl('', [
                Validators.required,
                Validators.minLength(4),
            ]),
            placeValue: new FormControl('', [Validators.required]),
        });
    }

    onFormSubmit(): void {
        console.log('Form:' + this.addProductForm);
        console.log('Form json:' + JSON.stringify(this.addProductForm.value));
    }
}
