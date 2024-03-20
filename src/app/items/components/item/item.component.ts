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

   deleteItem(item: Item) {
    console.log(item);
    this.itemsService.deleteItem(item.id);
    let itemsAux: Item[] = this.getItemList();
    this.updateList.next(itemsAux);

   }

   getItemList(): Item[] {
    let itemsAux: Item[] = this.itemsService.getItemsList();
    return itemsAux;
   }
}
