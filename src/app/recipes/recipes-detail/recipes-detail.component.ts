import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../service/recipe.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  private recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  @Input('recipeSelected')
  public set setRecipe(recipe: Recipe) {
    this.recipe = recipe;
  }

  public getRecipe(): Recipe {
    return this.recipe;
  }

  public toShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.getIngredients());
  }

}
