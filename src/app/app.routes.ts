import { Routes } from '@angular/router';
import { DiscoverComponent } from './discover/discover.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/discover',
    pathMatch: 'full',
  },
  {
    path: 'discover',
    component: DiscoverComponent,
  },
  {
    path: 'recipes',
    loadChildren: () =>
      import('../app/recipes/recipes.routes').then((m) => m.recipeRoutes),
  },
  {
    path: 'shopping-list',
    component: ShoppingListComponent,
  },
];
