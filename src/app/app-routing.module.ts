import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmptyRouteComponent} from './empty-route/empty-route.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
{path: 'products/product-list', component: ProductsComponent},
  {path: '**', component: EmptyRouteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'}
  ]

})
export class AppRoutingModule { }
