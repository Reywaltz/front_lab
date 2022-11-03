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



    // public countries: string[] = this.parseCountries(countries)
    public countries: Countries[] = countries

    public parseCountries(data: Countries[]) {
        let result: Array<string> = []
        data.forEach(element => {
            result.push(element.name)
        });

        return result
    }

    ngOnInit(): void {console.log(countries[0])}

    // public loginForm: IFormData = {
    //   login: 'Имя',
    //   password: '',
    // }

    testForm = new FormGroup({
        nameValue: new FormControl('', Validators.required),
        moneyValue: new FormControl('Имя2', Validators.required),
        personValue: new FormControl('', Validators.required),
        countryValue: new FormControl('Страна', Validators.required),
    });
}


