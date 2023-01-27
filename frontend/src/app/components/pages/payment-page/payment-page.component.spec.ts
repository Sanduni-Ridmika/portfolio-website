import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentPageComponent } from './payment-page.component';

describe('PaymentPageComponent', () => {
    let component: PaymentPageComponent;
    let fixture: ComponentFixture<PaymentPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PaymentPageComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]

        })
            .compileComponents();
    }));

    beforeEach(() => TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PaymentPageComponent]
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PaymentPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
