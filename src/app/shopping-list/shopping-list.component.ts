import { Component, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './service/shopping-list.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit {
  @ViewChild('nameInput') name: string;
  @ViewChild('amountInput') amount: number;
  private ingredients: Ingredient[] = [];

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.getIngredientChanged().subscribe( (ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    });
  }

  public getIngredient(): Ingredient[] {
    return this.ingredients;
  }


}
