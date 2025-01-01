import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataStorageService } from '../shared/services/data-storage.service';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  private dataStorageService = inject(DataStorageService);

  saveRecipeData() {
    this.dataStorageService.saveRecipeData();
  }

  fetchRecipeData() {
    this.dataStorageService.fetchRecipeData();
  }
}
