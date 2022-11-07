import { Component, OnInit } from '@angular/core';
import {
    AbstractControl,
    FormControl,
    FormGroup,
    ValidationErrors,
    Validators,
} from '@angular/forms';
import { tuiHeightCollapse } from '@taiga-ui/core';
import { Countries, countries } from 'src/assets/countries';
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
    public editProductForm: FormGroup = {} as FormGroup;

    ngOnInit(): void {
        this.editProductForm = new FormGroup(
            {
                nameValue: new FormControl('', [Validators.minLength(3)]),
                moneyValue: new FormControl('', [Validators.min(0)]),
                countryValue: new FormControl(''),
                developerValue: new FormControl('', [Validators.minLength(3)]),
                colorValue: new FormControl('', [Validators.minLength(4)]),
                placeValue: new FormControl('', [Validators.minLength(3)]),
            },
            { validators: this.CustomValidator }
        );
    }

    public parseForm(form: FormGroup): FormGroup {
        let country = form.value['countryValue'];
        form.value['countryValue'] = country.name;

        return form;
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
        let data = this.parseForm(this.editProductForm);
        this.warehouseService.push_form(data.value).subscribe((body: any) => {
            console.log(body);
        });
    }
}
