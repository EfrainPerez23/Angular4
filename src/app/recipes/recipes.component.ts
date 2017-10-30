import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  private selectedRecipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

  public setSelectedRecipe(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }

  public getSelectedRecipe(): Recipe {
    return this.selectedRecipe;
  }

}
