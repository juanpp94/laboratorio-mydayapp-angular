import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/core/models/item.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  items: Item[] = [
    {
      title: "Learn JavaScript",
      completed: true,
      id: '0',
    },
    {
      title: "Buy a unicorn",
      completed: false,
      id: '1',
    },
    {
      title: "Make dishes",
      completed: false,
      id: '1',
    },
  ];

  numberOfItemsCompleted: number = -1;

  constructor() { }

  ngOnInit(): void {
    this.numberOfItemsCompleted = this.getNumberOfItemsCompleted();
    console.log(this.numberOfItemsCompleted);
  }

  getNumberOfItemsCompleted(): number {

    let itemsCompleted = this.items.filter( (item: Item) => item.completed === true);
    return itemsCompleted.length;

  }

}
