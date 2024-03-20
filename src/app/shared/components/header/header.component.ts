import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  inputItemTitle = new FormControl(
    '', {nonNullable: true}
  );

  /**
   * Method that adds items to the list
   */
  addItem() {
    console.log(this.inputItemTitle.value);
  }

}
