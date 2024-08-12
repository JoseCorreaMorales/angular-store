import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsComponent } from './products.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  declarations: [ProductsComponent, ProductItemComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ProductsComponent
  ]
})
export class ProductsModule { }
