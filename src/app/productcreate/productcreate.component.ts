import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Countries, countries } from 'src/assets/countries';
import { IPlacement } from '../main/warehouse.model';
import { WarehouseService } from '../services/warehouse.service';

@Component({
    selector: 'app-productcreate',
    templateUrl: './productcreate.component.html',
    styleUrls: ['./productcreate.component.less'],
})
export class ProductcreateComponent implements OnInit {
    constructor(private warehouseService: WarehouseService) {
        this.warehouseService = warehouseService;
    }

    public countries: Countries[] = countries;
    public freeSpaces: IPlacement[] = [];
    public addProductForm: FormGroup = {} as FormGroup;
    public statusModel = '';
    public placeModel = '';

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
            countryValue: new FormControl('', [Validators.required]),
            developerValue: new FormControl('', [
                Validators.required,
                Validators.minLength(3),
            ]),
            typeValue: new FormControl('', [Validators.required]),
            colorValue: new FormControl('', [
                Validators.required,
                Validators.minLength(4),
            ]),
            statusValue: new FormControl('', [Validators.required]),
            placeValue: new FormControl('', [Validators.required]),
        });

        this.warehouseService.get_places().subscribe((data: any) => {
            this.freeSpaces = [...data];
        });
    }

    public parseForm(form: FormGroup): FormGroup {
        console.log(form.value);

        let country = form.value['countryValue'];
        form.value['countryValue'] = country.name;

        console.log(form.value);

        return form;
    }

    onFormSubmit(): void {
        let data = this.parseForm(this.addProductForm);
        this.warehouseService
            .pushCreateProductForm(data.value)
            .subscribe((body: any) => {});
    }
}
