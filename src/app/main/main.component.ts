import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WarehouseService } from '../services/warehouse.service';
import { IFormData, IWarehouseItem } from './warehouse.model';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.less'],
})
export class MainComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
