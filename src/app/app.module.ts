import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {EmptyRouteComponent} from './empty-route/empty-route.component';
import {APP_BASE_HREF} from '@angular/common';
import { ProductsComponent } from './products/products.component';
@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: "/"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
