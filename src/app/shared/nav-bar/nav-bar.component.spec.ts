import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarComponent } from './nav-bar.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;
  let userservicemock: Partial<UserService>;
  let router: Router;

  beforeEach(() => {
  userservicemock = {
    deleteUserName: jasmine.createSpy().and.returnValue(String),
    updateLoginStatus: jasmine.createSpy().and.returnValue(Boolean),
    loginStatus:new BehaviorSubject<boolean>(false)
  }

    TestBed.configureTestingModule({
      declarations: [NavBarComponent],
      imports: [HttpClientTestingModule],
      providers: [{ provide: UserService, useValue: userservicemock }],
    }).compileComponents();

    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
    userservicemock = TestBed.inject(UserService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should user logout', () => {
    component.logout();
    expect(userservicemock.deleteUserName).toHaveBeenCalled();
    expect(userservicemock.updateLoginStatus).toHaveBeenCalled();
    expect(router.url).toBe('/login');
  });

});

