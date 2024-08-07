import { Component, OnInit } from '@angular/core';
import { ShoppingCarService  } from '../shopping-car/shopping-car.service'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  showFiller = false;
  toggleSideBar = false


  constructor(private scService : ShoppingCarService) { }


  get itemsCount() : number {
    return this.scService.itemsCount
  }

  ngOnInit(): void {
  }

}
