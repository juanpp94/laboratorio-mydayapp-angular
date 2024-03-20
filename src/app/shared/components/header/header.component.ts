import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Item } from 'src/app/core/models/item.model';
import { ItemsService } from 'src/app/items/services/items.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  inputItemTitle = new FormControl(
    '', {nonNullable: true}
  );

  @Output() updateList = new EventEmitter<Item[]>();

  constructor(private itemsService: ItemsService) {

  }

  /**
   * Method that adds items to the list
   */
  createItem() {
    let itemList: Item[] = this.getItemList();
    let title: string = this.inputItemTitle.value;
    if(this.isTitleValid(title)) {
      this.itemsService.createItem({"completed" : false, "id": String(itemList.length) , "title": title});
      this.clearItemTitleInput();
      let itemsAux: Item[] = this.getItemList();
      this.updateList.next(itemsAux);
      //console.log(this.inputItemTitle.value);
    }
    
  }

  /**
   * Method that returns the list of items
   * @returns 
   */
  getItemList(): Item[] {
    let itemList: Item[] = this.itemsService.getItemsList();
    return itemList;
  }

  /**
   * Method that validates the title of the item
   * @param title 
   * @returns 
   */
  isTitleValid(title: string): boolean {
    let titleAux = this.removeSpacesAtTheBeginningAndEnd(title);
    if(this.isAnEmptyTitle(titleAux)) {
      console.log("es vacio, por lo tanto no es valido");
      return false;
    } else if(this.doesTheTitleOnlyContainSpaces(titleAux)) {
      console.log("solo contenia espacios");
      console.log(titleAux);
      return false
    } else {
      return true;
    }
  }

  /**
   * Method that validates if the title is empty
   * @param title 
   * @returns 
   */
  isAnEmptyTitle(title: string): boolean{
    if(title.length === 0) {
      return true;
    }
    else {
      return false;
    }
  }
  
  /**
   * Method that validates if the title contain spaces
   * @param title 
   * @returns 
   */
  doesTheTitleOnlyContainSpaces(title: string): boolean {
    return this.isAnEmptyTitle(this.removeSpacesAtTheBeginningAndEnd(title));
  }


  /**
   * Method that removes the spaces from the beginning and end of a string
   * @param title 
   * @returns 
   */
  removeSpacesAtTheBeginningAndEnd(title: string): string {
    let titleAux: string = (title.trimStart()).trimEnd();
    console.log("sin espacios",titleAux);
    return titleAux;
  }

  /**
   * Method that clear the input to enter the title of the item
   */
  clearItemTitleInput(){
    this.inputItemTitle.setValue("");
  }

}
