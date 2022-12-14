import {
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    TuiButtonModule,
    TuiDataListModule,
    TuiErrorModule,
    TuiTextfieldControllerModule,
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
    TuiComboBoxModule,
    TuiSelectModule,
    TuiFieldErrorPipeModule,
} from '@taiga-ui/kit';
import { TuiCurrencyPipeModule } from '@taiga-ui/addon-commerce';
import { ProductchangeComponent } from './productchange/productchange.component';
import { FilterlistPipe } from './pipes/filter.pipe';
import { ProductchangeplaceComponent } from './productchangeplace/productchangeplace.component';
@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        MainComponent,
        NotFoundComponent,
        ProductsComponent,
        ProductcreateComponent,
        FilterlistPipe,
        ProductchangeComponent,
        ProductchangeplaceComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        TuiComboBoxModule,
        TuiErrorModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        TuiRootModule,
        TuiButtonModule,
        ScrollingModule,
        TuiFieldErrorPipeModule,
        TuiTableModule,
        TuiInputNumberModule,
        TuiLetModule,
        TuiTextfieldControllerModule,
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
