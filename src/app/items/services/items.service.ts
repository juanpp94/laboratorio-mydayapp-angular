import { Injectable } from '@angular/core';
import { CreateItemDto, Item } from 'src/app/core/models/item.model';
import { ItemsHttpService } from './items-http.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  itemsList$ = new Subject<Item[]>();

  constructor(private itemHttpService: ItemsHttpService) { }

  /**
   * Method that sets the value of the item list 
   * @param itemList 
   */
  setItemsList(itemList: Item[]): void {
    if(!this.getItemsList()) {
      this.itemHttpService.setItemListInLocalStorage(itemList);
    }
    
  }

  /**
   * Method that gets the value of the item list from local storage
   * @returns 
   */
  getItemsList(): Item[] {
    let itemList: Item [] = this.itemHttpService.getItemListFromLocalStorage();
    return itemList;
  }



  /**
   * Method that creates an item
   * @param itemDto 
   */
  createItem(itemDto: CreateItemDto): void  {
    this.itemHttpService.createItemInLocalStorage(itemDto);
  }

  deleteItem(itemId: string): void {
    let itemsAux: Item[] = this.getItemsList();
    let itemsUpdated: Item[] = itemsAux.filter((item) => item.id !== itemId);
    console.log(itemsUpdated);
    this.itemHttpService.setItemListInLocalStorage(itemsUpdated);

  }

  setItemsListObservable(itemsList: Item[]) {
    this.itemsList$.next(itemsList);
  }

}
