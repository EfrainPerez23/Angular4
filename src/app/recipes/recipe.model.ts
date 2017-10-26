export class Recipe {
  private name: string;
  private description: string;
  private imagePath: string;

  constructor(name: string, description: string, imagePath: string) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
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
