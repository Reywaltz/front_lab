import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
})
export class AppComponent {
    constructor(private routerService: Router) {}

    ngOnInit(): void {}

    public navigate_products() {
        this.routerService.navigateByUrl('products');
    }

    public navidateCreateProduct() {
        this.routerService.navigateByUrl('products/create');
    }

    public navidateEditProduct() {
        this.routerService.navigateByUrl('products/edit');
    }
}
