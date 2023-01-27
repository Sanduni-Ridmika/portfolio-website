import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Order } from 'src/app/shared/models/Order';
import { OrderItemsListComponent } from './order-items-list.component';

describe('OrderItemsListComponent', () => {
    let component: OrderItemsListComponent;
    let fixture: ComponentFixture<OrderItemsListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [OrderItemsListComponent],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(OrderItemsListComponent);
        component = fixture.componentInstance;
        component.order = new Order();
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
