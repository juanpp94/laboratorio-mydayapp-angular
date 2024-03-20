import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/core/models/item.model';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export default class ItemsListComponent  {

  @Input() items: Item[] = [];
  @Output() updateNumberOfCompletedTasks = new EventEmitter<Number>();


  refreshList(event: Item[]) {
    let itemsAux: Item[] = event;
    this.setItemsList(itemsAux);
    let numberOfCompletedItems: Number = this.getNumberOfItemsCompleted();
    this.updateNumberOfCompletedTasks.next(numberOfCompletedItems);

  }

  /**
   * Method that sets the value of the item list value
   * @param item 
   */
  setItemsList(item: Item[]): void {
    this.items = item;
  }

  /**
   * Method that gets the numbers of items completed
   * @returns 
   */
  getNumberOfItemsCompleted(): number {

    let itemsCompleted = this.items.filter( (item: Item) => item.completed === true);
    return itemsCompleted.length;

  }


 

}
