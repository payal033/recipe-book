import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/models/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  private ingredients: Ingredient[] = [];
  ingredientsChanged = new Subject<Ingredient[]>();
  editItem = new Subject<number>();

  addIngredient(ingData: Ingredient) {
    this.ingredients.push(ingData);
    this.ingredientsChanged.next([...this.ingredients]);
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  getIngredients() {
    return [...this.ingredients];
  }

  addIngredientsFromRecipes(recipeIngredients: Ingredient[]) {
    this.ingredients.push(...recipeIngredients);
    this.ingredientsChanged.next([...this.ingredients]);
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next([...this.ingredients]);
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next([...this.ingredients]);
  }
}
