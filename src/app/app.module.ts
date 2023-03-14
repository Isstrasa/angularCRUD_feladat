import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablePageComponent } from './_components/table-page/table-page.component';
import { NewProductPageComponent } from './_components/new-product-page/new-product-page.component';
import { UpdateProductPageComponent } from './_components/update-product-page/update-product-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TablePageComponent,
    NewProductPageComponent,
    UpdateProductPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
