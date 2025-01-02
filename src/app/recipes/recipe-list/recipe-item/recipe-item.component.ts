import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPeopleGroup, faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { Recipe } from '../../../shared/models/recipe.model';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  imports: [FontAwesomeModule, RouterLink, RouterLinkActive],
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css',
})
export class RecipeItemComponent {
  faStopwatch = faStopwatch;
  faPeopleGroup = faPeopleGroup;

  @Input({ required: true }) recipeData!: Recipe;
  @Input({ required: true }) index!: number;
}
