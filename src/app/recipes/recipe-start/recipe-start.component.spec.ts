import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecipeStartComponent } from './recipe-start.component';
import { By } from '@angular/platform-browser';

describe('RecipeStartComponent', () => {
  let component: RecipeStartComponent;
  let fixture: ComponentFixture<RecipeStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeStartComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RecipeStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create recipestart component', () => {
    expect(component).toBeTruthy();
  });

  it('should display text on start', () => {
    const text = fixture.debugElement.query(By.css('h5')).nativeElement;

    expect(text.innerHTML).toBe(
      'Please create a new recipe or select from existing recipes!'
    );
  });
});
