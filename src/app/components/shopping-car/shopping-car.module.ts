import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCarComponent } from './shopping-car.component';
import { ShoppingItemComponent } from './shopping-item/shopping-item.component';
import { MaterialModule } from '../shared/material/material.module';


@NgModule({
  declarations: [
    ShoppingCarComponent,
    ShoppingItemComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ShoppingCarComponent
  ]
})
export class ShoppingCarModule { }
