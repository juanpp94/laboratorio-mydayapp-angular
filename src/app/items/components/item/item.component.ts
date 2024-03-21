import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Item, UpdateItemDto } from 'src/app/core/models/item.model';
import { ItemsService } from '../../services/items.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
   @Input() item: Item = {"title": "", "completed" : true, "id" : "", "editMode": false }
   @ViewChild("inputTitle", { static: false }) inputTitleRef: ElementRef<HTMLInputElement> = {} as ElementRef;
   @Output() updateList = new EventEmitter<Item[]>

   

   inputItemTitle = new FormControl(
      '', {nonNullable: true}
    );

   constructor(private itemsService: ItemsService, private router: Router) {

   }

   /**
    * Method that changes the status of an item
    * @param item 
    */
   changeStatus(item: Item): void {
      item.completed = !item.completed;
      this.itemsService.changeItemStatus(item);
      //this.router.navigate(["/","all"])
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
    //this.router.navigate(["/","all"])
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


   activateEditMode(item: Item){
     console.log("hice doble click");
     console.log(item.title);
     item.editMode = !item.editMode;
     this.setNewInputTitle(item.title);
     this.inputTitleRef.nativeElement.focus();
     

    }

    /**
     * Method that desactivates the edit mode
     * @param item 
     */
    desactivateEditModeAndSaveChanges(item: Item){
      console.log("hice doble click");
      let titleAux: string = this.getNewInputTitle();
      if(this.isTitleValid(titleAux)) {
         this.desactivateEditMode(item);
         item.title = this.getNewInputTitle();
         this.updateItem({"id": item.id, "title": item.title});
      }
      
     }

     desactivateEditMode(item: Item): void {
         item.editMode = !item.editMode;
     }


   updateItem(updatedItem: UpdateItemDto) {
      this.itemsService.updateItem(updatedItem);
      this.router.navigate(["/","all"])
   }

   



   /**
    * Method that returns the items list
    * @returns 
    */
   getItemsList(): Item[] {
    let itemsAux: Item[] = this.itemsService.getItemsList();
    return itemsAux;
   }


   /**
    * Method that gets the new input title
    * @returns 
    */
   getNewInputTitle(): string {
     return this.inputItemTitle.value;
      
   }


   setNewInputTitle(itemTitle: Item['title']): void {
      this.inputItemTitle.setValue(itemTitle);
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


}
