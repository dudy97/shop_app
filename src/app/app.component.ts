import { Component } from '@angular/core';
import {ShoppingListService} from './service/shopping-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop-app';
  ifShowReceipes: boolean;

  constructor() {
    this.ifShowReceipes = true;
  }

  chooseTab(tabChosen: string) {
    if (tabChosen === 'receipes') {
      this.ifShowReceipes = true;
    } else {
      this.ifShowReceipes = false;
    }
  }
}
