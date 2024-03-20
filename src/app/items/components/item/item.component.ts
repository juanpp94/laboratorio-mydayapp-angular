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
    this.updateList.next(itemsAux);

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
