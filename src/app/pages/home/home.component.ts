import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/core/models/item.model';
import { ItemsService } from 'src/app/items/services/items.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  items: Item[] = [

  ];

  numberOfCompletedItems: number = -1;

  constructor(public itemsService: ItemsService) { }

  ngOnInit(): void {
    //this.numberOfCompletedItems = this.getNumberOfCompletedItems();
    console.log(this.numberOfCompletedItems);
    let itemsAux: Item[] = this.getItemsList();
    this.setItemsList(itemsAux);
    let completedItemsAux = this.getCompletedItems();
    this.setCompletedItems(completedItemsAux);
  }


  /**
   * Method that refreshes the list of items
   * @param event 
   */
  refreshList(event: Item[]): void {
    console.log("nueva lista",event);
    let updatedList: Item[] = event;
    this.setItemsList(updatedList);
    //this.getNumberOfCompletedItems();
  }



  refreshFooter(event: Number): void {
    let numberOfCompletedItems: Number = event;
    console.log("nuevo numero de completed items:",numberOfCompletedItems);
    //this.setItemsList
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

  /**
   * Method that gets the item list
   * @returns 
   */
  getItemsList(): Item[] {
    let itemList: Item[] = this.itemsService.getItemsList();
    if(!itemList) {
      return [];
    } else {
      return itemList;
    }
  }

  /**
   * Method that sets the value of the item list value
   * @param item 
   */
  setItemsList(item: Item[]): void {
    this.itemsService.itemsList = item;
    this.items = item;
  }

  

}
