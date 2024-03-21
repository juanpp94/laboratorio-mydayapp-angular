import { Component, OnInit } from '@angular/core';
import { ItemsService } from './items/services/items.service';
import { Item } from './core/models/item.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  itemList: Item[] = [];
  constructor(private itemsService: ItemsService, private router: Router) {

  }

  ngOnInit() {
    console.log("vine para el app component");
    this.router.navigateByUrl('/all')
  }

  
}
