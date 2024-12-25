import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faMagnifyingGlass,
  faShuffle,
} from '@fortawesome/free-solid-svg-icons';
import { DiscoverService } from './discover.service';

@Component({
  selector: 'app-discover',
  imports: [FontAwesomeModule, FormsModule],
  templateUrl: './discover.component.html',
  styleUrl: './discover.component.css',
})
export class DiscoverComponent implements OnInit {
  faMagnifyingGlass = faMagnifyingGlass;
  faShuffle = faShuffle;
  searchTerm!: string;
  searchedRecipes: any;
  randomRecipe: any;

  private discoverService = inject(DiscoverService);

  constructor() {}

  ngOnInit(): void {}

  findRandom() {
    this.discoverService.getRandomRecipe().subscribe((data: any) => {
      console.log(data['meals'][0]);
    });
  }

  onSearch(formData: NgForm) {
    const search = formData.form.value.search;
    this.searchTerm = search.trim();
    if (this.searchTerm) {
      this.discoverService
        .getRecipeByName(this.searchTerm)
        .subscribe((data: any) => {
          this.searchedRecipes = data['meals'];
        });
    }
  }
}
