import { Component, inject } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterModule,
} from '@angular/router';
import { DataStorageService } from '../shared/services/data-storage.service';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  private dataStorageService = inject(DataStorageService);
  private router = inject(Router);
  currentRoute: string = '';

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        console.log(event.url);
      }
    });
  }

  saveRecipeData() {
    this.dataStorageService.saveRecipeData();
  }

  saveSLData() {
    this.dataStorageService.saveShoppingList();
  }

  fetchRecipeData() {
    this.dataStorageService.fetchRecipeData();
  }

  fetchSLData() {
    this.dataStorageService.fetchShoppingList();
  }
}
