import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/core/models/item.model';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export default class ItemsListComponent  {

  @Input() items: Item[] = [];
  @Output() updateNumberOfCompletedTasks = new EventEmitter<Number>();

  constructor(private itemsService: ItemsService) {

  }


  refreshList(event: Item[]) {
    let itemsAux: Item[] = event;
    this.setItemsList(itemsAux);
    let itemsCompletedAux: Item[] = this.getCompletedItems();
    this.setCompletedItems(itemsCompletedAux);
    //this.updateNumberOfCompletedTasks.next(numberOfCompletedItems);

  }

  /**
   * Method that sets the value of the item list value
   * @param item 
   */
  setItemsList(items: Item[]): void {
    this.items = items;
    this.itemsService.itemsList = items;
  }

  /**
   * Method that gets the completed items
   * @returns 
   */
  getCompletedItems(): Item[] {

    let itemsCompleted = this.itemsService.getCompletedItems();
    return itemsCompleted;

  }


  setCompletedItems(item: Item[]): void {
    this.itemsService.setCompletedItems(item);
  }


 

}
