import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginPageComponent } from './login-page.component';
import { UserService } from 'src/app/services/user.service';
import { of, throwError } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrService } from 'ngx-toastr';
import { ToastrModule } from 'ngx-toastr';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  let userService: UserService;
  let toastr: ToastrService;
  let router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPageComponent],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
        ToastrModule.forRoot()
      ],
      providers: [
        UserService,
        ToastrService
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);
    toastr = TestBed.inject(ToastrService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be invalid when empty', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('email field should be invalid when empty', () => {
    const email = component.loginForm.controls.email;
    expect(email.valid).toBeFalsy();
    //expect(email.errors.required).toBeTruthy();
  });

  it('password field should be invalid when empty', () => {
    const password = component.loginForm.controls.password;
    expect(password.valid).toBeFalsy();
   // expect(password.errors.required).toBeTruthy();
  });

   it('form should be valid when email and password are filled', () => {
    const email = component.loginForm.controls.email;
    email.setValue('test@example.com');
    const password = component.loginForm.controls.password;
    password.setValue('password');
    expect(component.loginForm.valid).toBeTruthy();
  });

  it('should initialize the form with empty values', () => {
    expect(component.loginForm.value).toEqual({ email: '', password: '' });
  });

  it('should set isSubmitted to true when the form is submitted', () => {
    component.submit();
    expect(component.isSubmitted).toBe(true);
  });

  it('should not call login when the form is invalid', () => {
    spyOn(userService, 'login');
    component.loginForm.controls.email.setValue('');
    component.submit();
    expect(userService.login).not.toHaveBeenCalled();
  });

  it('should call userService login when form is submitted', () => {
    spyOn(userService, 'login').and.returnValue(of());
    const email = component.loginForm.controls.email;
    email.setValue('test@example.com');
    const password = component.loginForm.controls.password;
    password.setValue('password');
    const submitButton = fixture.debugElement.query(By.css('default-button')).nativeElement;
    submitButton.click();
    submitButton.dispatchEvent(new Event('click'));
  });

});
