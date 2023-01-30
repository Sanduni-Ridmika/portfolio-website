import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { OrderTrackPageComponent } from './order-track-page.component';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/shared/models/Order';
import { CartItem } from 'src/app/shared/models/CartItem';

describe('OrderTrackPageComponent', () => {
  let component: OrderTrackPageComponent;
  let fixture: ComponentFixture<OrderTrackPageComponent>;
  let orderService: OrderService;
  let activatedRoute: ActivatedRoute;
  let order: Order;
  let cartItem: CartItem;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderTrackPageComponent ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: {
                orderId: 1
              }
            }
          }
        },
        {
          provide: OrderService,
          useValue: {
            trackOrderById: jasmine.createSpy().and.returnValue(of(order))
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderTrackPageComponent);
    component = fixture.componentInstance;
    orderService = TestBed.get(OrderService);
    activatedRoute = TestBed.get(ActivatedRoute);
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call trackOrderById with the correct orderId', () => {
    expect(orderService.trackOrderById).toHaveBeenCalledWith(1);
  });

  it('should set the order property to the returned order', () => {
    expect(component.order).toEqual(order);
  });
});
