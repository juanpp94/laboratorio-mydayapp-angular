import { Component, OnInit } from '@angular/core';
import { ItemsService } from './items/services/items.service';
import { Item } from './core/models/item.model';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  itemList: Item[] = [];
  constructor(private itemsService: ItemsService) {

  }

  ngOnInit() {
    this.setItemList(this.itemList);
  }

  setItemList(itemList: Item[]): void {
    this.itemsService.saveItemsList(itemList);
  }
}
