import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FilterList } from 'src/app/core/models/item.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent  {
 @Input() numberOfCompletedItems: number = -1;
 @Input() filter: FilterList = "all";
 @Output() updateFilter = new EventEmitter<FilterList>();

 constructor(private router: Router) {
  
 }

 goTo(route: FilterList){
  this.filter = route;
  console.log(route);
  this.updateFilter.next(this.filter);
  console.log("vine para el footer component");
  this.router.navigateByUrl(`/${this.filter}`)
 }



   
}
