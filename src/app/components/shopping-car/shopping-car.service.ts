import { Injectable } from '@angular/core';
import { CarItem } from '../../domain/entities/car-item'
@Injectable({
  providedIn: 'root'
})
export class ShoppingCarService {

  carItems : CarItem [] = [
    {
      imageUrl: "https://www.beatsbydre.com/content/dam/beats/web/product/headphones/studiopro-wireless/global/serp/studiopro-pdp-global-serp-black.jpg",
      name: "ITEM 1",
      price: 200.99
    },
    {
      imageUrl: "https://www.beatsbydre.com/content/dam/beats/web/product/headphones/studiopro-wireless/global/serp/studiopro-pdp-global-serp-black.jpg",
      name: "ITEM 2",
      price: 200
    },
    {
      imageUrl: "https://www.beatsbydre.com/content/dam/beats/web/product/headphones/studiopro-wireless/global/serp/studiopro-pdp-global-serp-black.jpg",
      name: "ITEMS 3",
      price: 200
    }
  ]
  constructor() { }

  /* Products on shopping car  */
  get itemsCount() : number {
    return this.carItems.length
  }

  deleteItem (selectedItem : CarItem) : void {
    this.carItems = this.carItems.filter(item => item != selectedItem)
  }

  addItem(item : CarItem) : void {
    this.carItems.push(item)
  }

  get total() : number {
    return this.carItems.reduce((acc, {price}) => acc +=price, 0) * 100 / 100
  }

}
