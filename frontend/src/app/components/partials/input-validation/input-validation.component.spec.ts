import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputValidationComponent } from './input-validation.component';

describe('InputValidationComponent', () => {
  let component: InputValidationComponent;
  let fixture: ComponentFixture<InputValidationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [InputValidationComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(InputValidationComponent);
    component = fixture.componentInstance;
    component.control = new FormControl();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display error messages when control is invalid', () => {
    component.control.setValue('');
    component.control.setErrors({ required: true });
    fixture.detectChanges();

    const errorList = fixture.debugElement.nativeElement.querySelector('.error-list');
    expect(errorList.textContent).toContain('Should not be empty');
  });
});
