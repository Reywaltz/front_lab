import { TuiRootModule, TuiDialogModule, TuiAlertModule, TuiButtonModule } from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsComponent } from './products/products.component';
import { TuiTableModule } from "@taiga-ui/addon-table";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    NotFoundComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiButtonModule,
    TuiTableModule,
    TuiDialogModule,
    TuiAlertModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
