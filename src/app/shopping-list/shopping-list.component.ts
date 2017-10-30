import { Component, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  @ViewChild('nameInput') name: string;
  @ViewChild('amountInput') amount: number;


  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];
  constructor() {}

  ngOnInit() {}

  public getIngredients(): Ingredient[] {
    return this.ingredients;
  }

  public addNewIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
