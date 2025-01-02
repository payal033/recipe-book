import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { Ingredient } from '../shared/models/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DataStorageService } from '../shared/services/data-storage.service';

@Component({
  selector: 'app-shopping-list',
  imports: [ShoppingEditComponent, FontAwesomeModule],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients!: Ingredient[];
  subscription!: Subscription;

  faXmark = faXmark;

  constructor(private shoppingService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.shoppingService.getIngredients();
    this.subscription = this.shoppingService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  onEditItem(index: number) {
    this.shoppingService.editItem.next(index);
  }

  onDelete(id: number) {
    this.shoppingService.deleteIngredient(id);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
