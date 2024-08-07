import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/domain/entities/product';
import { ShoppingCarService } from '../../shopping-car/shopping-car.service'
@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product : Product = {imageUrl: "", name: "", price: 0, description : ""}

  constructor(private scService: ShoppingCarService) { }

  ngOnInit(): void {
  }

  addToCar(item: any) : void {
    console.log("item ", item);
    this.scService.addItem(item)
  }

}
  