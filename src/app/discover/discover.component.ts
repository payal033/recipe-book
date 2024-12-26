import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faMagnifyingGlass,
  faShuffle,
} from '@fortawesome/free-solid-svg-icons';
import { DiscoverService } from './discover.service';
import { CommonModule } from '@angular/common';
import { DiscoverRecipeComponent } from './discover-recipe/discover-recipe.component';

@Component({
  selector: 'app-discover',
  imports: [
    FontAwesomeModule,
    FormsModule,
    CommonModule,
    DiscoverRecipeComponent,
  ],
  templateUrl: './discover.component.html',
  styleUrl: './discover.component.css',
})
export class DiscoverComponent implements OnInit {
  faMagnifyingGlass = faMagnifyingGlass;
  faShuffle = faShuffle;

  searchTerm!: string;
  searchedRecipes: any;
  randomRecipe: any;
  flagSearch!: boolean;
  recipeById: any;

  private discoverService = inject(DiscoverService);

  ngOnInit(): void {}

  onSearch(form: NgForm) {
    this.flagSearch = true;
    const search = form.form.value.search;
    this.searchTerm = search.trim();
    if (this.searchTerm) {
      this.discoverService
        .getRecipeByName(this.searchTerm)
        .subscribe((data: any) => {
          this.searchedRecipes = data['meals'];
          // console.log(this.searchedRecipes);
        });
    } else {
      alert('Please enter a search term!');
    }
    form.reset();
    this.recipeById = null;
  }

  singleRecipeData(data: any) {
    let meal = data['meals'][0];
    const ingredients = [];

    for (let i = 1; i <= 25; i++) {
      if (meal[`strIngredient${i}`]) {
        ingredients.push(
          `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
        );
      } else {
        break;
      }
    }

    let recipe = {
      mealName: meal['strMeal'],
      category: meal['strCategory'],
      mealImage: meal['strMealThumb'],
      instructions: meal['strInstructions'],
      ingredients: ingredients,
    };

    return recipe;
  }

  findRandom() {
    this.flagSearch = false;
    this.discoverService.getRandomRecipe().subscribe((data: any) => {
      this.randomRecipe = this.singleRecipeData(data);
    });
  }

  getMealById(mealId: string) {
    this.discoverService.getRecipeById(mealId).subscribe((data: any) => {
      this.recipeById = this.singleRecipeData(data);
    });
  }
}
