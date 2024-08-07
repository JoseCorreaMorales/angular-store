import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import  { CarItem } from '../../../domain/entities/car-item'

@Component({
  selector: 'shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.scss']
})
export class ShoppingItemComponent {
  
  @Input() carItems : CarItem = {
    imageUrl: "",
    name: "",
    price: 0
  }

  @Output() carItemToDelete = new EventEmitter<CarItem>();

  onDeleteItemFromCar () : void {
    this.carItemToDelete.emit(this.carItems)
  }

}
