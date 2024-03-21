import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FilterList, Item } from 'src/app/core/models/item.model';
import { ItemsService } from 'src/app/items/services/items.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent  {
 @Input() numberOfCompletedItems: number = -1;
 @Input() filter: FilterList = "all";
 @Output() updateFilter = new EventEmitter<FilterList>();

 constructor(private router: Router, private itemsService: ItemsService) {
  
 }

 goTo(route: FilterList){
  this.filter = route;
  console.log(route);
  this.updateFilter.next(this.filter);
  console.log("vine para el footer component");
  this.router.navigateByUrl(`/${this.filter}`)
 }

 clearCompletedItems(): void {
   let itemsAux = this.itemsService.getFilteredItems("pending");
   this.itemsService.setItemsList(itemsAux);
 }



   
}
