import { Injectable } from '@angular/core';
import { RecipeService } from '../../recipes/recipe.service';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(private recipeService: RecipeService) {}

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
}
