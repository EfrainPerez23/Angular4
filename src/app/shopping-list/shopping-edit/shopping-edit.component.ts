import {
  Component,
  OnInit,
  ViewChild,
  EventEmitter,
  Output,
  ElementRef
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') name: ElementRef;
  @ViewChild('amountInput') amount: ElementRef;
  private ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  public addIngredient() {
    if (this.name && this.amount && this.amount.nativeElement.value > 0) {
      this.ingredientAdded.emit(new Ingredient(this.name.nativeElement.value, this.amount.nativeElement.value));
    }
  }

  @Output('newIngredient')
  public get getIngredientAdded(): EventEmitter<Ingredient> {
    return this.ingredientAdded;
  }


}
