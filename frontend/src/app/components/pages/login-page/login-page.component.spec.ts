import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPageComponent } from './login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UserService } from 'src/app/services/user.service';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  let userService: UserService;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, RouterTestingModule, HttpClientTestingModule],
      declarations: [ LoginPageComponent ],
      providers: [UserService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    userService = TestBed.get(UserService);
    router = TestBed.get(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have email and password form controls', () => {
    expect(component.loginForm.get('email')).toBeTruthy();
    expect(component.loginForm.get('password')).toBeTruthy();
  });
/*
  it('should have correct validation rules for form controls', () => {
    expect(component.loginForm.get('email').validator).toBeTruthy();
    expect(component.loginForm.get('password').validator).toBeTruthy();
  });

  it('should call the login method of the UserService when the form is submitted', () => {
    spyOn(userService, 'login').and.returnValue(of({}));
    component.submit();
    expect(userService.login).toHaveBeenCalled();
  });

  it('should navigate to the correct URL after a successful login', () => {
    spyOn(userService, 'login').and.returnValue(of({}));
    spyOn(router, 'navigateByUrl');
    component.submit();
    expect(router.navigateByUrl).toHaveBeenCalledWith('/home');
  });

  it('should disable the submit button when the form is invalid', () => {
    component.loginForm.get('email').setValue('');
    component.loginForm.get('password').setValue('');
    component.submit();
    expect(component.isSubmitted).toBeTruthy();
  });

  it('should set the returnUrl variable correctly', () => {
    component.ngOnInit();
    expect(component.returnUrl).toBe('/home');
  });

  it('should show error messages when the form is invalid', () => {
    component.loginForm.get('email').setValue('');
    component.loginForm.get('password').setValue('');
    component.submit();
    fixture.detectChanges();
    const emailError = fixture.debugElement.query(By.css('#email-error'));
    const passwordError = fixture.debugElement.query(By.css('#password-error'));
    expect(emailError).toBeTruthy();
    expect(passwordError).toBeTruthy();
  });

   it('should call the login method of the UserService with the correct email and password', () => {
    spyOn(userService, 'login').and.returnValue(of({}));
    component.loginForm.get('email').setValue('test@example.com');
    component.loginForm.get('password').setValue('testpassword');
    component.submit();
    expect(userService.login).toHaveBeenCalledWith({email: 'test@example.com', password: 'testpassword'});
  });

  it('should handle login errors correctly', () => {
    spyOn(userService, 'login').and.returnValue(throwError({error: 'Invalid email or password'}));
    component.loginForm.get('email').setValue('test@example.com');
    component.loginForm.get('password').setValue('testpassword');
    component.submit();
    expect(component.loginForm.get('email').hasError('invalidLogin')).toBeTruthy();
    expect(component.loginForm.get('password').hasError('invalidLogin')).toBeTruthy();
  });
});
*/
});
