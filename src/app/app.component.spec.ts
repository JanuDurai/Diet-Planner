import { TestBed } from '@angular/core/testing';
import { HomeComponent } from './Home/home.component';
import { LoginComponent } from './Login/login.component';
import { ProfileComponent } from './Profile/profile.component';
import { RegisterComponent } from './Register/register.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterOutlet } from '@angular/router';

describe('AppComponent', () => {
  beforeEach(() =>
  TestBed.configureTestingModule({
    declarations: [
      AppComponent,
      HomeComponent,
      ProfileComponent,
      LoginComponent,
      RegisterComponent,
      HeaderComponent,
      NavBarComponent,
      FooterComponent
    ],
    imports:[HttpClientTestingModule,RouterOutlet]

  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'App Component Testing'`,()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('App Component Testing');
  });

});

