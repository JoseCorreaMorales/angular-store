import { Component, OnInit } from '@angular/core';
import { Product } from '../../domain/entities/product'
import  { ProductsService } from './products.service'
@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private productsService : ProductsService) { }

  ngOnInit(): void {
  }

  // get product from service
  get products() : Product[] {
    return this.productsService.products
  }

}
