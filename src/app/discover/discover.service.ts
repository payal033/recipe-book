import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DiscoverService {
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
}
