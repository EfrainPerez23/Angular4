import { Recipe } from '../recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../shopping-list/service/shopping-list.service';

@Injectable()
export class RecipeService {

  private recipeSelected = new EventEmitter<Recipe>();
  private recipe: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('Tasty Schnitzel', 'A super Tasty Schnitzel - just awesome!',
    'http://givememora.com/wp-content/uploads/2014/03/shnitzel.jpg',
    [
      new Ingredient('Meat', 1),
      new Ingredient('French Fries', 20)
    ]
    ),
    new Recipe('Big Fat Burger', 'What else you need to say?', 'http://aht.seriouseats.com/images/20100331-fatburger-large.jpg', [
      new Ingredient('Buns', 2),
      new Ingredient('Meat', 1)
    ]),
    ];

  constructor(private shoppingListService: ShoppingListService) { }

  public getRecipes(): Recipe[] {
    return this.recipe.slice();
  }
  public getRecipeSelected(): EventEmitter<Recipe> {
    return this.recipeSelected;
  }

  public addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

}
