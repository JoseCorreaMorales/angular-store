import { Component, OnInit } from '@angular/core';
//import {ChangeDetectionStrategy, Component} from '@angular/core';
import { ShoppingCarService } from './shopping-car.service'
import { CarItem } from '../../domain/entities/car-item'

@Component({
  selector: 'shopping-car',
  templateUrl: './shopping-car.component.html',
  styleUrls: ['./shopping-car.component.scss']
})
export class ShoppingCarComponent implements OnInit {

  constructor(private scService : ShoppingCarService ) { }

  ngOnInit(): void {
  }

  get carItems() : CarItem [] {
    return this.scService.carItems
  }

  deleteItem (item : CarItem) : void {
     this.scService.deleteItem(item)
  }

}
