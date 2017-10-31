import { Ingredient } from '../shared/ingredient.model';
export class Recipe {
  private name: string;
  private description: string;
  private imagePath: string;
  private ingredients: Ingredient[];

  constructor(name: string, description: string, imagePath: string, ingredients: Ingredient[]) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }

  public setIngredients(ingredients: Ingredient[]) {
    this.ingredients = ingredients;
  }

  public getIngredients(): Ingredient[] {
    return this.ingredients;
  }

  public setName(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }

  public setDescription(description: string) {
    this.description = description;
  }

  public getDescription(): string {
    return this.description;
  }

  public setImagePath(imagePath: string) {
    this.imagePath = imagePath;
  }
  public getImagePath(): string {
    return this.imagePath;
  }


}
