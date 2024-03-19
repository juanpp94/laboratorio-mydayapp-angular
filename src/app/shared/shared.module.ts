import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './components/item/item.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
  
    ItemComponent,
       FooterComponent,
       HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ItemComponent,
    FooterComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
