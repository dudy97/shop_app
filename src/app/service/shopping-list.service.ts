import {Ingredient} from '../shared/ingredient-model';
import {EventEmitter} from '@angular/core';

export class ShoppingListService {
  onIngredientsChange = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Mleko', 250),
    new Ingredient('Mleko', 250),
    new Ingredient('Mleko', 250)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.onIngredientsChange.emit(this.ingredients.slice());
  }


  addIngredientsFromReceipe(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.onIngredientsChange.emit(this.ingredients.slice());
  }
}
