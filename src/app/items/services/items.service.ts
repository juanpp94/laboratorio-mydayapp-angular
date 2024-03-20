import { Injectable } from '@angular/core';
import { CreateItemDto, Item } from 'src/app/core/models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor() { }

  /**
   * Method that sets the value of the item list 
   * @param itemList 
   */
  saveItemsList(itemList: Item[]): void {
    if(!this.getItemList) {
      localStorage.setItem("mydayapp-angular",JSON.stringify(itemList));
    }
    
  }

  /**
   * Method that gets the value of the item list from local storage
   * @returns 
   */
  getItemList(): Item[] {
    let itemList: Item[] = JSON.parse(localStorage.getItem("mydayapp-angular")!);
    return itemList;
  }

  createItem(item: CreateItemDto): void  {

  }

}
