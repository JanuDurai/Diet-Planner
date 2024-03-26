import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { NavBarComponent } from './nav-bar.component';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;
  let userservice: UserService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavBarComponent],
      imports: [HttpClientTestingModule],
      providers: [UserService],
    }).compileComponents();

    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
    userservice = TestBed.inject(UserService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call update login status method on initialisation', () => {
    spyOn(userservice, 'updateLoginStatus');
    component.ngOnInit();
    expect(userservice.updateLoginStatus).toBeTruthy();
  });

  it('should user logout', () => {
    spyOn(userservice, 'deleteUserName');
    spyOn(userservice, 'updateLoginStatus');
    spyOn(router, 'navigate');
    component.logout();
    expect(userservice.deleteUserName).toHaveBeenCalled();
    expect(userservice.updateLoginStatus).toHaveBeenCalled();
    expect(router.navigate).toHaveBeenCalledWith(['/login']);
  });
});
