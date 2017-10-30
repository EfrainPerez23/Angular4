import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
  private recipe: Recipe;
  private recipeSelected = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  @Input('recipe')
  public set setRecipe(recipe: Recipe) {
    this.recipe = recipe;
  }

  @Output('recipeSelected')
  public get getRecipeSelected(): EventEmitter<void> {
    return this.recipeSelected;
  }

  public getRecipe(): Recipe {
    return this.recipe;
  }

  public onSelected() {
    this.recipeSelected.emit();
  }

}
