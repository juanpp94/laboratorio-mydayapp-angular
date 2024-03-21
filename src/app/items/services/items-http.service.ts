import { Injectable } from '@angular/core';
import { CreateItemDto, Item } from 'src/app/core/models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsHttpService {
  

  constructor() { }


  /**
   * Method that creates an item in local storage
   * @param item 
   */
  createItemInLocalStorage(item: CreateItemDto): void {
    let itemList: Item[] = this.getItemListFromLocalStorage();
    itemList.push(item);
    //console.log(itemList);
    this.setItemListInLocalStorage(itemList);
    
  }

   /**
   * Method that gets the value of the item list from local storage
   * @returns 
   */
   getItemListFromLocalStorage(): Item[] {
    let itemList: Item[] = JSON.parse(localStorage.getItem("mydayapp-angular")!);
    //console.log(itemList);
    return itemList;
  }
  

  /**
   * Method that set items list in local storage
   */
  setItemListInLocalStorage(itemList: Item[]): void {
    if(!this.getItemListFromLocalStorage()) {
      console.log("aqui deberia estar");
      localStorage.setItem("mydayapp-angular",JSON.stringify([]));
    } else {
      localStorage.setItem("mydayapp-angular",JSON.stringify(itemList));
    }
  }

  
}
