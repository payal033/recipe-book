import { Ingredient } from './ingredient.model';

export interface Recipe {
  name: string;
  description: string;
  cookTime: string;
  recipeType: string;
  servings: string;
  imageURL: string;
  ingredients: Ingredient[];
}

export const recipeTypes = [
  'Appetizer',
  'Bread',
  'Breakfast',
  'Dessert',
  'Drink',
  'Main Dish',
  'Salad',
  'Sauce/Salsa',
  'Side Dish',
  'Snack',
  'Soup',
  'Wrap/Sandwich',
];
