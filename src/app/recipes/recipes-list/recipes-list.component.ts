import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  private recipeWasSelected = new EventEmitter<Recipe>();
  private recipe: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('A Text Recipe', 'This is a Simple Test', 'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg'),
    new Recipe('A Text Recipe', 'This is a Simple Test', 'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg'),
    new Recipe('A Text Recipe', 'This is a Simple Test', 'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg')

  ];


  constructor() { }

  ngOnInit() {
  }

  public getRecipe(): Recipe[] {
    return this.recipe;
  }

  public onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

  @Output('recipeSelected')
  public get getRecipeWasSelected(): EventEmitter<Recipe> {
    return this.recipeWasSelected;
  }

}
