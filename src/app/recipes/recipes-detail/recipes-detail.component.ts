import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  private recipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

  @Input('recipeSelected')
  public set setRecipe(recipe: Recipe) {
    this.recipe = recipe;
  }

  public getRecipe(): Recipe {
    return this.recipe;
  }

}
