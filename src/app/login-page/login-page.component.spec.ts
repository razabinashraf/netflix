import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { UserauthService } from '../userauth.service';
import { of } from 'rxjs';

import { LoginPageComponent } from './login-page.component';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };
  let mockUserAuthService = {
    validateUser: jasmine.createSpy('validateUser').and.returnValue(of(true))
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPageComponent],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: UserauthService, useValue: mockUserAuthService }
      ]
    });
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to home on successful login', () => {
    component.onSubmit();
    expect(mockUserAuthService.validateUser).toHaveBeenCalled();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['home']);
  });

  it('should set error to true on failed login', () => {
    mockUserAuthService.validateUser.and.returnValue(of(false));
    component.onSubmit();
    expect(component.error).toBeTrue();
  });

  it('should navigate to signup on signup', () => {
    component.onSignup();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['signup']);
  });
});
