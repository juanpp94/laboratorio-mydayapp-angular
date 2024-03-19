import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/core/models/item.model';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export default class ItemsListComponent  {

  @Input() items: Item[] = [];


 

}
