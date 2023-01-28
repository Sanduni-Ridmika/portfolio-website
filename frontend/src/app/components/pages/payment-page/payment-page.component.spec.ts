import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/shared/models/Order';

import { PaymentPageComponent } from './payment-page.component';

describe('PaymentPageComponent', () => {
    let component: PaymentPageComponent;
    let fixture: ComponentFixture<PaymentPageComponent>;
    let orderService: OrderService;
    let router: Router;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PaymentPageComponent],
            imports: [HttpClientTestingModule],
            schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
            providers: [
              OrderService,
              { provide: Router, useValue: { navigateByUrl: jasmine.createSpy('navigateByUrl') } }
            ]

        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PaymentPageComponent);
        component = fixture.componentInstance;
        orderService = TestBed.get(OrderService);
        router = TestBed.get(Router);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});
