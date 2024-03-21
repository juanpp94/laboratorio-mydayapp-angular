import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item, FilterList } from 'src/app/core/models/item.model';
import { ItemsService } from 'src/app/items/services/items.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  items: Item[] = [];

  filter: FilterList = "all";

  numberOfCompletedItems: number = -1;

  constructor(public itemsService: ItemsService, private routeActivate: ActivatedRoute) { }

  ngOnInit(): void {
    //this.numberOfCompletedItems = this.getNumberOfCompletedItems();
    // console.log(this.numberOfCompletedItems);
    let itemsAux: Item[] = this.getItemsList();
    this.setItemsList(itemsAux);
    let completedItemsAux = this.getCompletedItems();
    this.setCompletedItems(completedItemsAux);
    let filter = this.getFilter();
    this.filter = filter;
    this.setFilter(filter)
    let itemsFiltered = this.getFilteredItemsFromUrlParams();
    this.setItemsListFiltered(itemsFiltered);
    console.log(itemsFiltered);
    //this.setItemsList(itemsFiltered);
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

  refreshFilter(event: FilterList): void {
    console.log("filtro por output",event);
    this.filter = event;
    this.setFilter(this.filter);
    this.itemsService.itemsList = this.getFilteredItemsFromFooter()
    //console.log("filtro por parametro de url:",this.getFilter());
    // this.setFilter(event);
    // let itemsAux: Item[] = this.getFilteredItems();
    // this.setItemsListFiltered(itemsAux);
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

  getFilteredItemsFromFooter(): Item[] {
    //let filter: FilterList = this.getFilter();
    //this.setFilter(this.filter);
    let itemsFiltered: Item[] = this.itemsService.getFilteredItems(this.filter);
    console.log(itemsFiltered);
    return itemsFiltered;
    
  }

  getFilteredItemsFromUrlParams(): Item[] {
    let filter: FilterList = this.getFilter();
    this.setFilter(filter);
    let itemsFiltered: Item[] = this.itemsService.getFilteredItems(filter);
    console.log(itemsFiltered);
    return itemsFiltered;
    
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
  
  setItemsListFiltered(item: Item[]): void {
    this.itemsService.itemsList = item;
    this.items = item;
  }

  /**
   * Method that sets the value of the item list value
   * @param item 
   */
  setItemsList(item: Item[]): void {
    this.itemsService.itemsList = item;
    this.items = item;
    this.itemsService.setItemsList(this.items);
  }

  /**
   * Method that gets url param
   * @returns 
   */
  getFilter() {
    let filter: FilterList = this.routeActivate.snapshot.params['filter'];
    return filter
    //console.log(this.routeActivate.snapshot.params['status']);
  }

  /**
   * Method that sets the status to filter the items
   * @param status 
   */
  setFilter(filter: FilterList) {
    //this.filter = filter;
    this.itemsService.setFilter(filter);
  }

  

}
