import { Injectable } from '@angular/core';
import { CardItem } from './shopping-card/card-item';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCardService {

  cardItems : CardItem [] = [
    {
      imageUrl: "",
      name: "name",
      price: 200
    },
    {
      imageUrl: "",
      name: "name",
      price: 200
    },
    {
      imageUrl: "",
      name: "name",
      price: 200
    }
  ]

  constructor() { }

  get itemsCount() : number {
    return this.cardItems.length
  }

}
