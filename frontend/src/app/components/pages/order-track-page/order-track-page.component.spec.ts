import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OrderTrackPageComponent } from './order-track-page.component';

describe('OrderTrackPageComponent', () => {
    let component: OrderTrackPageComponent;
    let fixture: ComponentFixture<OrderTrackPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
          imports: [
            ReactiveFormsModule,
            FormsModule
          ],
            declarations: [OrderTrackPageComponent]
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
