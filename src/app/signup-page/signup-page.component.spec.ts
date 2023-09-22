import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignupPageComponent } from './signup-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { UserauthService } from '../userauth.service';

describe('SignupPageComponent', () => {
  let component: SignupPageComponent;
  let fixture: ComponentFixture<SignupPageComponent>;
  let userAuthService: UserauthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignupPageComponent],
      imports: [RouterTestingModule],
      providers: [UserauthService], // Mock or provide a testing version of UserauthService
    }).compileComponents();

    userAuthService = TestBed.inject(UserauthService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the form with empty values', () => {
    expect(component.form).toEqual({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  });

  it('should set error to false on form submission with matching passwords', () => {
    component.form.password = 'password123';
    component.form.confirmPassword = 'password123';

    spyOn(userAuthService, 'setUserDetails'); // Mocking setUserDetails

    component.onSubmit();

    expect(component.error).toBeFalse();
    expect(userAuthService.setUserDetails).toHaveBeenCalledWith(component.form);
  });

  it('should set error to true on form submission with non-matching passwords', () => {
    component.form.password = 'password123';
    component.form.confirmPassword = 'differentpassword';

    spyOn(userAuthService, 'setUserDetails'); // Mocking setUserDetails

    component.onSubmit();

    expect(component.error).toBeTrue();
    expect(userAuthService.setUserDetails).not.toHaveBeenCalled(); // setUserDetails should not be called
  });

  it('should reset the form on reset button click', () => {
    component.form = {
      name: 'John',
      email: 'john@example.com',
      password: 'password123',
      confirmPassword: 'password123',
    };

    component.onReset();

    expect(component.form).toEqual({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  });
});
