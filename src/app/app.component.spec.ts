import { TestBed,waitForAsync,ComponentFixture } from '@angular/core/testing';
import { HomeComponent } from './Home/home.component';
import { LoginComponent } from './Login/login.component';
import { ProfileComponent } from './Profile/profile.component';
import { RegisterComponent } from './Register/register.component';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('AppComponent', () => {
  beforeEach(() =>
  TestBed.configureTestingModule({
    declarations: [
      AppComponent,
      HomeComponent,
      ProfileComponent,
      LoginComponent,
      RegisterComponent,
    ],
  }));

  it(`should have as title 'App Component Testing'`,()=>{
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('App Component Testing');
  });
  
  // it(`should render title in a h1 tag`,()=>{
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const app = fixture.nativeElement as HTMLElement;
  //   expect(app.querySelector('h1')?.textContent).toContain('App Component Testing');
  // });

});

