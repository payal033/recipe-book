import { Component, inject, Input, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faPenToSquare,
  faRectangleList,
  faTrash,
  faCheckSquare,
} from '@fortawesome/free-solid-svg-icons';
import { Recipe } from '../../shared/models/recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-detail',
  imports: [FontAwesomeModule],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent implements OnInit {
  recipeDetail!: Recipe;
  id!: number;
  addedToSL: boolean = false;

  faPenToSquare = faPenToSquare;
  faTrash = faTrash;
  faRectangleList = faRectangleList;
  faCheckSquare = faCheckSquare;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((parameters: Params) => {
      this.id = +parameters['id'];
      this.recipeDetail = this.recipeService.getRecipe(this.id);
    });
  }

  addToShoppingList() {
    const recipeIngredients = this.recipeService.addIngredientsToShoppingList(
      this.recipeDetail.ingredients
    );

    // console.log(recipeIngredients);
    this.addedToSL = true;
  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}
