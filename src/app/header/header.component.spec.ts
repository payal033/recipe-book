import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { Head } from 'rxjs';
import { provideRouter } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  });

  it('should create Header component', () => {
    expect(component).toBeTruthy();
  });

  it('should contain "Discover", "My Recipes", and "Shopping List" links', () => {
    const links = fixture.debugElement.queryAll(By.css('.nav-link'));
    const linkTexts = links.map((link) =>
      link.nativeElement.textContent.trim()
    );

    expect(linkTexts).toContain('Discover');
    expect(linkTexts).toContain('My Recipes');
    expect(linkTexts).toContain('Shopping List');
  });
});
