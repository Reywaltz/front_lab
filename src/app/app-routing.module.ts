import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OverviewComponent } from './overview/overview.component';
import { ProductchangeComponent } from './productchange/productchange.component';
import { ProductchangeplaceComponent } from './productchangeplace/productchangeplace.component';
import { ProductcreateComponent } from './productcreate/productcreate.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
    { path: 'overview', component: OverviewComponent },
    { path: '', component: MainComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'products/edit', component: ProductchangeComponent },
    { path: 'products/edit/place', component: ProductchangeplaceComponent},
    { path: 'products/create', component: ProductcreateComponent },
    { path: '**', component: NotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
