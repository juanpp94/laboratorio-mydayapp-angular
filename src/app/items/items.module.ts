import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import ItemsListComponent from './components/items-list/items-list.component';
import { ItemComponent } from './components/item/item.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ItemsListComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ItemsListComponent,
    ItemComponent
  ]
})
export class ItemsModule { }
