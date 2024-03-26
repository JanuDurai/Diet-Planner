import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a text', () => {
    const compile = fixture.nativeElement as HTMLElement;
    expect(compile.querySelector('h3')?.textContent).toContain('A HEALTHY');
  });

  it('should render a text', () => {
    const compile = fixture.nativeElement as HTMLElement;
    expect(compile.querySelector('h1')?.textContent).toContain('OUTSIDE');
  });
});
