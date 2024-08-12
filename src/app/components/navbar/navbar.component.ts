import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ShoppingCarService  } from '../shopping-car/shopping-car.service'
import { FormControl } from '@angular/forms';
import { MatDrawerMode, MatSidenav } from '@angular/material/sidenav';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {
  showFiller = false;
  toggleSideBar = false
  shouldRun = false
  reason = '';
  mode = new FormControl<MatDrawerMode>('side')
  @ViewChild('sidenav') sidenav!: MatSidenav;


  constructor(private scService : ShoppingCarService) { }

  close(reason: string) {
    this.reason = reason;
    if (this.sidenav) {
      this.sidenav.close();
    }
  }

  open() {
    console.log("click");
    if (this.sidenav) {
      this.sidenav.open();
      console.log("sidenav opened");
    } else {
      console.error('Sidenav no está disponible');
    }
  }

  // Count products on shooping car
  get itemsCount() : number {
    return this.scService.itemsCount
  }

  ngAfterViewInit() {
      if (!this.sidenav) {
        console.error('Sidenav no inicializado');
      } else {
        console.log('Sidenav inicializado correctamente');
      }
  }

}
