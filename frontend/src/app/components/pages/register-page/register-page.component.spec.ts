import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterPageComponent } from './register-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';
import { of } from 'rxjs';
import { IUserRegister } from 'src/app/shared/interfaces/IUserRegister';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


describe('RegisterPageComponent', () => {
  let component: RegisterPageComponent;
  let fixture: ComponentFixture<RegisterPageComponent>;
  let userService: UserService;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterPageComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        HttpClientTestingModule,
        ToastrModule.forRoot()
      ],
      providers: [ UserService ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPageComponent);
    component = fixture.componentInstance;
    userService = TestBed.get(UserService);
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an invalid form by default', () => {
    expect(component.registerForm.valid).toBeFalsy();
  });


it('should have invalid form if name field is empty', () => {
  component.registerForm.controls.name.setValue('');
  expect(component.registerForm.valid).toBeFalsy();
});

it('should have invalid form if email field is empty', () => {
  component.registerForm.controls.email.setValue('');
  expect(component.registerForm.valid).toBeFalsy();
});

it('should have invalid form if password field is empty', () => {
  component.registerForm.controls.password.setValue('');
  expect(component.registerForm.valid).toBeFalsy();
});

it('should have invalid form if confirmPassword field is empty', () => {
  component.registerForm.controls.confirmPassword.setValue('');
  expect(component.registerForm.valid).toBeFalsy();
});

it('should have invalid form if confirmPassword does not match password', () => {
  component.registerForm.controls.password.setValue('password');
  component.registerForm.controls.confirmPassword.setValue('notmatching');
  expect(component.registerForm.valid).toBeFalsy();
});

it('should have a form with invalid initial state', () => {
  expect(component.registerForm.valid).toBeFalsy();
});

it('should have invalid form if name field is empty', () => {
  component.registerForm.controls.name.setValue('');
  expect(component.registerForm.valid).toBeFalsy();
});

it('should have invalid form if email field is empty', () => {
  component.registerForm.controls.email.setValue('');
  expect(component.registerForm.valid).toBeFalsy();
});

it('should have invalid form if password field is empty', () => {
  component.registerForm.controls.password.setValue('');
  expect(component.registerForm.valid).toBeFalsy();
});

it('should have invalid form if confirmPassword field is empty', () => {
  component.registerForm.controls.confirmPassword.setValue('');
  expect(component.registerForm.valid).toBeFalsy();
});

});
