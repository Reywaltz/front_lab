import {
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    TuiButtonModule,
    TuiDataListModule,
} from '@taiga-ui/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsComponent } from './products/products.component';
import { TuiTableModule } from '@taiga-ui/addon-table';
import { TuiLetModule } from '@taiga-ui/cdk';
import { ProductcreateComponent } from './productcreate/productcreate.component';
import {
    TuiInputModule,
    TuiInputNumberModule,
    TuiDataListWrapperModule,
    TuiSelectModule,
} from '@taiga-ui/kit';
import { TuiCurrencyPipeModule } from '@taiga-ui/addon-commerce';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        MainComponent,
        NotFoundComponent,
        ProductsComponent,
        ProductcreateComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        TuiRootModule,
        TuiButtonModule,
        ScrollingModule,
        TuiTableModule,
        TuiInputNumberModule,
        TuiLetModule,
        TuiSelectModule,
        TuiDataListModule,
        TuiCurrencyPipeModule,
        TuiInputModule,
        TuiDataListWrapperModule,
        TuiDialogModule,
        TuiAlertModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
