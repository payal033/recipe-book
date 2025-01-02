import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/models/ingredient.model';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  private ingredients: Ingredient[] = [];
  ingredientsChanged = new Subject<Ingredient[]>();
  editItem = new Subject<number>();

  removeAll = new BehaviorSubject<boolean>(true);

  addIngredient(ingData: Ingredient) {
    this.ingredients.push(ingData);
    this.ingredientsChanged.next([...this.ingredients]);
    this.updateRemoveAllState();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  getIngredients() {
    return [...this.ingredients];
  }

  setIngredients(ingredients: Ingredient[]) {
    this.ingredients = ingredients;
    this.ingredientsChanged.next([...this.ingredients]);
  }

  addIngredientsFromRecipes(recipeIngredients: Ingredient[]) {
    this.ingredients.push(...recipeIngredients);
    this.ingredientsChanged.next([...this.ingredients]);
    this.updateRemoveAllState();

    return this.getIngredients();
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next([...this.ingredients]);
    this.updateRemoveAllState();
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next([...this.ingredients]);
    this.updateRemoveAllState();
  }

  deleteAllIngredients() {
    this.ingredients.splice(0, this.ingredients.length);
    this.ingredientsChanged.next([...this.ingredients]);
    this.updateRemoveAllState();
  }

  private updateRemoveAllState() {
    this.removeAll.next(this.ingredients.length === 0);
  }
}
