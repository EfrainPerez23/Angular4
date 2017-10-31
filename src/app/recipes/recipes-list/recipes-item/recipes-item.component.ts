import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../service/recipe.service';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
  private recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  @Input('recipe')
  public set setRecipe(recipe: Recipe) {
    this.recipe = recipe;
  }


  public getRecipe(): Recipe {
    return this.recipe;
  }

  public onSelected() {
    this.recipeService.getRecipeSelected().emit(this.recipe);
  }

}
