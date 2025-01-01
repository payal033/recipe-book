import {
  afterRender,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ShoppingListService } from '../shopping-list.service';
import { Subscription } from 'rxjs';
import { Ingredient } from '../../shared/models/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  imports: [FormsModule],
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('shoppingForm') shoppingListForm!: NgForm;
  private subscription!: Subscription;
  editMode = false;
  editItemIndex!: number;
  editItem!: Ingredient;

  isRemoveAll = true;

  constructor(private shoppingService: ShoppingListService) {}

  ngOnInit(): void {
    this.subscription = this.shoppingService.editItem.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editItemIndex = index;
        this.editItem = this.shoppingService.getIngredient(index);
        this.shoppingListForm.setValue({
          ingredientName: this.editItem.ingredientName,
          quantity: this.editItem.quantity,
        });
      }
    );

    this.shoppingService.removeAll.subscribe(
      (removeAllState) => (this.isRemoveAll = removeAllState)
    );
  }

  addIngredient(form: NgForm) {
    const ingName = form.value.ingredientName;
    const quantity = form.value.quantity;

    const newIngredient = {
      ingId: +Math.random(),
      ingredientName: ingName,
      quantity: quantity,
    };

    if (this.editMode) {
      this.shoppingService.updateIngredient(this.editItemIndex, newIngredient);
    } else {
      this.shoppingService.addIngredient(newIngredient);
    }
    this.onClear();
    this.editMode = false;
  }

  onClear() {
    this.shoppingListForm.reset();
    this.editMode = false;
  }

  onRemoveAll() {
    const answer = confirm(
      'Are you sure you want to delete all the ingredients?'
    );
    if (answer) {
      this.shoppingService.deleteAllIngredients();
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
