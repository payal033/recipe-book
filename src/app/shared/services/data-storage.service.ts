import { Injectable } from '@angular/core';
import { RecipeService } from '../../recipes/recipe.service';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(
    private recipeService: RecipeService,
    private shoppingService: ShoppingListService
  ) {}

  saveRecipeData() {
    const recipes = this.recipeService.getRecipes();
    window.localStorage.setItem('recipes', JSON.stringify(recipes));
  }

  fetchRecipeData() {
    const recipeData = localStorage.getItem('recipes');
    if (recipeData) {
      const recipes = JSON.parse(recipeData);
      this.recipeService.setRecipes(recipes);
    }
  }

  saveShoppingList() {
    const shoppingIngs = this.shoppingService.getIngredients();
    window.localStorage.setItem(
      'shoppingIngredients',
      JSON.stringify(shoppingIngs)
    );
  }

  fetchShoppingList() {
    const shoppingList = localStorage.getItem('shoppingIngredients');
    if (shoppingList) {
      const ingredients = JSON.parse(shoppingList);
      this.shoppingService.setIngredients(ingredients);
    }
  }
}
