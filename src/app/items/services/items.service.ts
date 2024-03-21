import { Injectable } from '@angular/core';
import { CreateItemDto, FilterList, Item, UpdateItemDto } from 'src/app/core/models/item.model';
import { ItemsHttpService } from './items-http.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  itemsList$ = new Subject<Item[]>();
  itemsList: Item[] = [];
  completedItems: Item[] = [];
  filter: FilterList = "all";
  

  constructor(private itemHttpService: ItemsHttpService) { }

  /**
   * Method that sets the value of the item list 
   * @param itemList 
   */
  setItemsList(itemList: Item[]): void {
    this.itemsList = itemList;
    this.itemHttpService.setItemListInLocalStorage(itemList);
    
  }
  
  

  /**
   * Method that updates the title of an item
   * @param updatedItem 
   */
  updateItem(updatedItem: UpdateItemDto): void {
    this.itemsList = this.getItemsList();
    let itemsAux = this.itemsList.map((item: Item) => {
      if(item.id === updatedItem.id) {
        item.title = updatedItem.title
        console.log(item);
      }
      return item;
    })
    //this.itemsList = itemsAux;
    this.setItemsList(itemsAux);

    //console.log(itemsAux);

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
   * Method that changes the status of an item
   * @param item 
   */
  changeItemStatus(item: Item): void {
    let items: Item[] = this.getItemsList();

    for(let i = 0; i < items.length; i++){
      if(items[i].id === item.id) {
        console.log("lo consegui");
        items[i].completed = !items[i].completed;
        console.log(item);
      }
      console.log(items);
    }
    this.itemsList = items;
    this.setItemsList(items);
    this.completedItems = this.getCompletedItems();
    //console.log(items);

  }

  /**
   * Method that gets the completed items
   * @returns 
   */
  getCompletedItems(): Item[] {
    let itemsAux: Item[] = this.getItemsList();
    let itemsCompleted: Item[] = itemsAux.filter( (item: Item) => item.completed === true);
    return itemsCompleted;

  }


  /**
   * Method that sets the list of complete items;
   * @param items 
   */
  setCompletedItems(items: Item[])  {
    this.completedItems = items;
  }



  /**
   * Method that creates an item
   * @param itemDto 
   */
  createItem(itemDto: CreateItemDto): void  {
    console.log(itemDto);
    this.itemHttpService.createItemInLocalStorage(itemDto);
  }

  /**
   * Method that deletes an element from the list
   * @param itemId 
   */
  deleteItem(itemId: string): void {
    let itemsAux: Item[] = this.getItemsList();
    let itemsUpdated: Item[] = itemsAux.filter((item) => item.id !== itemId);
    console.log(itemsUpdated);
    this.itemHttpService.setItemListInLocalStorage(itemsUpdated);

  }

  /**
   * Method that gets the returns the string to filter the items list
   * @returns 
   */
  getFilter(): FilterList {
    return this.filter;
  }

  getFilteredItems(filter: FilterList): Item[] {
    let itemsAux: Item[] = this.getItemsList();
    let itemsFiltered: Item[] = [];
    // this.itemsService.setFilter(filter);
    if(filter === "completed") {
      itemsFiltered = itemsAux.filter((item: Item) => item.completed === true);
    } else if(filter === "pending") {
      itemsFiltered = itemsAux.filter((item: Item) => item.completed === false);
    } else {
      itemsFiltered = itemsAux;
    }
    //console.log(itemsFiltered);
    return itemsFiltered;
    
  }

  /**
   * Method that sets the string to filter the items list
   * @param filter 
   */
  setFilter(filter: FilterList) {
    console.log("nuevo filtro:",filter);
    this.filter = filter;
  }

  

  setItemsListObservable(itemsList: Item[]) {
    this.itemsList$.next(itemsList);
  }

}
