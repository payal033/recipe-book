import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-discover-recipe',
  imports: [],
  templateUrl: './discover-recipe.component.html',
  styleUrl: './discover-recipe.component.css',
})
export class DiscoverRecipeComponent {
  @Input({ required: true }) recipe: any;
}
