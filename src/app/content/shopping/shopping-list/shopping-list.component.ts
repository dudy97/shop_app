import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../../../shared/ingredient-model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Mleko', 250),
    new Ingredient('Mleko', 250),
    new Ingredient('Mleko', 250)
  ];

  constructor() { }

  ngOnInit() {
  }

  addToList(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
  }
}
