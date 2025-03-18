import { TestBed } from '@angular/core/testing';
import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from '../shared/models/ingredient.model';

describe('ShoppingListService', () => {
  let service: ShoppingListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppingListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add an ingredient and update ingredientsChanged', (done) => {
    const newIngredient: Ingredient = {
      ingId: 1,
      ingredientName: 'Tomato',
      quantity: '3',
    };

    service.ingredientsChanged.subscribe((ingredients) => {
      expect(ingredients.length).toBe(1);
      expect(ingredients[0]).toEqual(newIngredient);
      done();
    });

    service.addIngredient(newIngredient);
  });

  it('should get an ingredient by index', () => {
    const ingredient = {
      ingId: 1,
      ingredientName: 'Salt',
      quantity: '1',
    } as Ingredient;
    service.addIngredient(ingredient);

    expect(service.getIngredient(0)).toEqual(ingredient);
  });

  it('should return a copy of the ingredients list', () => {
    const ingredient: Ingredient = {
      ingId: 4,
      ingredientName: 'Pepper',
      quantity: '2',
    };
    service.addIngredient(ingredient);

    const ingredientsCopy = service.getIngredients();
    expect(ingredientsCopy).toEqual([ingredient]);
    expect(ingredientsCopy).not.toBe(service.getIngredients()); // Ensures it's a new array
  });

  it('should set ingredients and emit the changes', (done) => {
    const newIngredients: Ingredient[] = [
      { ingId: 9, ingredientName: 'Carrot', quantity: '2' },
      { ingId: 11, ingredientName: 'Potato', quantity: '5' },
    ];

    service.ingredientsChanged.subscribe((ingredients) => {
      expect(ingredients.length).toBe(2);
      expect(ingredients).toEqual(newIngredients);
      done();
    });

    service.setIngredients(newIngredients);
  });

  it('should add ingredients from recipes and update removeAll state', (done) => {
    const recipeIngredients: Ingredient[] = [
      { ingId: 22, ingredientName: 'Egg', quantity: '2' },
      { ingId: 15, ingredientName: 'Flour', quantity: '1' },
    ];

    service.ingredientsChanged.subscribe((ingredients) => {
      expect(ingredients.length).toBe(2);
      done();
    });

    service.addIngredientsFromRecipes(recipeIngredients);
  });

  it('should update an ingredient and emit the change', (done) => {
    const ingredient: Ingredient = {
      ingId: 12,
      ingredientName: 'Sugar',
      quantity: '3',
    };
    service.addIngredient(ingredient);

    const updatedIngredient: Ingredient = {
      ingId: 14,
      ingredientName: 'Brown Sugar',
      quantity: '4',
    };

    service.ingredientsChanged.subscribe((ingredients) => {
      expect(ingredients[0]).toEqual(updatedIngredient);
      done();
    });

    service.updateIngredient(0, updatedIngredient);
  });

  it('should delete an ingredient and emit the change', (done) => {
    service.addIngredient({
      ingId: 17,
      ingredientName: 'Butter',
      quantity: '1',
    } as Ingredient);

    service.ingredientsChanged.subscribe((ingredients) => {
      expect(ingredients.length).toBe(0);
      done();
    });

    service.deleteIngredient(0);
  });

  it('should delete all ingredients and emit the change', (done) => {
    service.addIngredient({
      ingId: 1,
      ingredientName: 'Milk',
      quantity: '1',
    } as Ingredient);
    service.addIngredient({
      ingId: 2,
      ingredientName: 'Cheese',
      quantity: '2',
    } as Ingredient);

    service.ingredientsChanged.subscribe((ingredients) => {
      expect(ingredients.length).toBe(0);
      done();
    });

    service.deleteAllIngredients();
  });
});
