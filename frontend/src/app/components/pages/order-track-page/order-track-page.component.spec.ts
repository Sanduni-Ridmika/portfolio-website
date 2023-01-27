import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { OrderTrackPageComponent } from './order-track-page.component';

describe('OrderTrackPageComponent', () => {
    let component: OrderTrackPageComponent;
    let fixture: ComponentFixture<OrderTrackPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
          imports: [
            ReactiveFormsModule,
            FormsModule,
            HttpClientTestingModule
          ],
            declarations: [OrderTrackPageComponent],
            providers: [{ provide: ActivatedRoute, useValue: {snapshot: {params: {orderId: '1'}}} } ]

        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(OrderTrackPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
