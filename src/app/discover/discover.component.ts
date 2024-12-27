import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
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
  private discoverService = inject(DiscoverService);

  categories = this.discoverService.categories;
  recipeList: any;

  searchTerm!: string;
  searchedRecipes: any;
  flagSearch!: boolean;

  randomRecipe: any;
  randomFlag = false;

  categorySelected!: string;
  categoryRecipes: any;
  categoryFlag = false;

  recipeById: any;

  ngOnInit(): void {
    this.onCategorySelected('Vegetarian');
  }

  onSearch(form: NgForm) {
    this.randomFlag = false;
    this.categoryFlag = false;
    this.flagSearch = true;
    this.categorySelected = '';
    const search = form.form.value.search;
    if (search) {
      this.searchTerm = search.trim();
      this.discoverService
        .getRecipeByName(this.searchTerm)
        .subscribe((data: any) => {
          this.searchedRecipes = data['meals'];
          console.log(this.searchedRecipes);
        });
    } else {
      alert('Please enter a search term!');
    }
    form.reset();
    this.recipeById = null;
  }

  onCategorySelected(category: string) {
    console.log('Selected category ' + category);
    this.categoryFlag = true;
    this.searchTerm = category;
    this.randomFlag = false;
    this.flagSearch = false;

    this.categorySelected = category;
    this.discoverService
      .getRecipeByCategory(category)
      .subscribe((data: any) => {
        this.categoryRecipes = data['meals'];
      });
    this.recipeById = null;
  }

  findRandom() {
    this.flagSearch = false;
    this.categoryFlag = false;
    this.randomFlag = true;
    this.searchTerm = '';
    this.discoverService.getRandomRecipe().subscribe((data: any) => {
      this.randomRecipe = this.singleRecipeData(data);
    });
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
      area: meal['strArea'],
      mealImage: meal['strMealThumb'],
      instructions: meal['strInstructions'],
      ingredients: ingredients,
      youtubeUrl: meal['strYoutube'],
    };

    console.log(recipe);
    this.categorySelected = recipe.category;

    return recipe;
  }

  getMealById(mealId: string) {
    this.discoverService.getRecipeById(mealId).subscribe((data: any) => {
      this.recipeById = this.singleRecipeData(data);
    });
  }
}
