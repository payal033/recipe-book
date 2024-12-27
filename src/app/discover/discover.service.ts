import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DiscoverService {
  categories = [
    'Vegetarian',
    'Breakfast',
    'Starter',
    'Side',
    'Dessert',
    'Seafood',
    'Pork',
    'Pasta',
    'Lamb',
    'Goat',
    'Chicken',
    'Beef',
    'Miscellaneous',
  ];

  constructor(private httpClient: HttpClient) {}

  getRecipeByName(searchTerm: string) {
    return this.httpClient.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
    );
  }

  getRecipeById(mealId: string) {
    return this.httpClient.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    );
  }

  getRandomRecipe() {
    return this.httpClient.get(
      'https://www.themealdb.com/api/json/v1/1/random.php'
    );
  }

  getRecipeByCategory(category: string) {
    return this.httpClient.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    );
  }
}
