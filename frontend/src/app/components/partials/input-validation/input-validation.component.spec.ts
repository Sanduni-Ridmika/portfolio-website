import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl } from '@angular/forms';

import { InputValidationComponent } from './input-validation.component';

describe('InputValidationComponent', () => {
    let component: InputValidationComponent;
    let fixture: ComponentFixture<InputValidationComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [InputValidationComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(InputValidationComponent);
        component = fixture.componentInstance;
        component.control = new FormControl();
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
