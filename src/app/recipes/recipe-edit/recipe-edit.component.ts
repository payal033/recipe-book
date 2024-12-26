import { Component, Input, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../../shared/models/recipe.model';

@Component({
  selector: 'app-recipe-edit',
  imports: [FontAwesomeModule, ReactiveFormsModule],
  templateUrl: './recipe-edit.component.html',
  styleUrl: './recipe-edit.component.css',
})
export class RecipeEditComponent implements OnInit {
  id!: number;
  editMode: boolean = false;
  recipeTypes!: string[];
  faXmark = faXmark;
  recipeForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.recipeTypes = this.recipeService.getRecipeTypes();
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.editMode = params['id'] != null;
    });
    this.initForm();
  }

  initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeCookTime = '';
    let recipeType = '';
    let recipeServings = '';
    let recipeIngredients = new FormArray<FormGroup>([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imageURL;
      recipeDescription = recipe.description;
      recipeCookTime = recipe.cookTime;
      recipeType = recipe.recipeType;
      recipeServings = recipe.servings;

      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          const ingData = new FormGroup({
            ingredientName: new FormControl(
              ingredient.ingredientName,
              Validators.required
            ),
            quantity: new FormControl(ingredient.quantity, Validators.required),
          });
          recipeIngredients.push(ingData);
        }
      }
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      imageURL: new FormControl(recipeImagePath, Validators.required),
      description: new FormControl(recipeDescription, Validators.required),
      cookTime: new FormControl(recipeCookTime, Validators.required),
      recipeType: new FormControl(recipeType, Validators.required),
      servings: new FormControl(recipeServings, Validators.required),
      ingredients: recipeIngredients,
    });
  }

  get controls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  onSubmit() {
    const newRecipe: Recipe = {
      name: this.recipeForm.value['name'],
      description: this.recipeForm.value['description'],
      cookTime: this.recipeForm.value['cookTime'],
      recipeType: this.recipeForm.value['recipeType'],
      servings: this.recipeForm.value['servings'],
      imageURL: this.recipeForm.value['imageURL'],
      ingredients: this.recipeForm.value['ingredients'],
    };

    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, newRecipe);
    } else {
      this.recipeService.addRecipe(newRecipe);
    }

    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
    console.log('clicked on cancel button');
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        ingredientName: new FormControl(null, Validators.required),
        quantity: new FormControl(null, Validators.required),
      })
    );
  }
}
