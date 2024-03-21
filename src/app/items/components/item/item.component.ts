import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from 'src/app/core/models/item.model';
import { ItemsService } from '../../services/items.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
   @Input() item: Item = {'title': ' ', 'completed' : true, 'id' : ''}

   @Output() updateList = new EventEmitter<Item[]>

   constructor(private itemsService: ItemsService) {

   }

   changeStatus(item: Item): void {
      item.completed = !item.completed;
      this.itemsService.changeItemStatus(item);
   }

   /**
    * Method that deletes an item from the list
    * @param item 
    * 
    */
   deleteItem(item: Item) {
    console.log(item);
    this.itemsService.deleteItem(item.id);
    let itemsAux: Item[] = this.getItemsList();
    let completedItemsAux: Item[] = this.getCompletedItems();
    this.setCompletedItems(completedItemsAux);
    this.itemsService.itemsList = itemsAux;
    //this.updateList.next(itemsAux);

   }

    /**
   * Method that gets the completed items
   * @returns 
   */
   getCompletedItems(): Item[] {

      let itemsCompleted = this.itemsService.getCompletedItems();
      return itemsCompleted;

   }

   /**
    * Method that sets the completed items
    * @param item 
    */
   setCompletedItems(item: Item[]): void {
      this.itemsService.setCompletedItems(item);
    }
   



   /**
    * Method that returns the items list
    * @returns 
    */
   getItemsList(): Item[] {
    let itemsAux: Item[] = this.itemsService.getItemsList();
    return itemsAux;
   }
}
