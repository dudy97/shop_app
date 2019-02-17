import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Ingredient} from '../../../shared/ingredient-model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @Output() passIngredient = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  addIngredient(nameInput: HTMLInputElement, amountInput: HTMLInputElement) {
    this.passIngredient.emit(new Ingredient(nameInput.value, Number(amountInput.value)));
  }
}
