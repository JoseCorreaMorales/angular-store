import { Injectable } from '@angular/core';
import { Product } from '../../domain/entities/product'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  readonly products: Product[] = [
    {
      imageUrl: "https://via.placeholder.com/150",
      name: "Product 1",
      price: 29.99,
      description: "This is a short description of Product 1."
    },
    {
      imageUrl: "https://via.placeholder.com/150",
      name: "Product 2",
      price: 19.99,
      description: "This is a short description of Product 2."
    },
    {
      imageUrl: "https://via.placeholder.com/150",
      name: "Product 3",
      price: 39.99,
      description: "This is a short description of Product 3."
    },
    {
      imageUrl: "https://via.placeholder.com/150",
      name: "Product 4",
      price: 49.99,
      description: "This is a short description of Product 4."
    },
    {
      imageUrl: "https://via.placeholder.com/150",
      name: "Product 5",
      price: 59.99,
      description: "This is a short description of Product 5."
    },
    {
      imageUrl: "https://via.placeholder.com/150",
      name: "Product 6",
      price: 79.99,
      description: "This is a short description of Product 6."
    },
    {
      imageUrl: "https://via.placeholder.com/150",
      name: "Product 6",
      price: 57.99,
      description: "This is a short description of Product 7."
    },
    {
      imageUrl: "https://via.placeholder.com/150",
      name: "Product 6",
      price: 24.99,
      description: "This is a short description of Product 8."
    }

  ];
}
