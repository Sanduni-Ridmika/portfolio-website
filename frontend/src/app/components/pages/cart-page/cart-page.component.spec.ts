import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CartPageComponent } from './cart-page.component';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';
import { Service } from 'src/app/shared/models/Service';
import { of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

describe('CartPageComponent', () => {
  let component: CartPageComponent;
  let fixture: ComponentFixture<CartPageComponent>;
  let cartService: CartService;
  let cart: Cart;
  let cartItem: CartItem;
  let service: Service;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartPageComponent ],
      imports: [
        RouterModule,
        CommonModule,
      ],
      providers: [ { provide: CartService},
        { provide: ActivatedRoute, useValue: {} }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartPageComponent);
    component = fixture.componentInstance;
    cartService = TestBed.get(CartService);
    cart = new Cart();
    //cartItem = new CartItem(new Service({ id: '1', name: 'Test Service', price: 10 }));
    cart.items.push(cartItem);
    spyOn(cartService, 'getCartObservable').and.returnValue(of(cart));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have cart object', () => {
    cartService.getCartObservable().subscribe(cart => {
      component.cart = cart;
      expect(component.cart).toEqual(cart);
    });
  });

  it('should call changeQuantity method of cartService when changeQuantity method is called', () => {
    let service = new Service();
    service.id = '1'
    let cartItem = new CartItem(service);
    spyOn(cartService, 'changeQuantity');
    component.changeQuantity(cartItem, '2');
    expect(cartService.changeQuantity).toHaveBeenCalledWith('1', 2);
  });

  it('should remove item from cart', () => {
    const service = new Service();
    service.id = '123';
    component.cart.items = [new CartItem(service)];
    spyOn(component['cartService'], 'removeFromCart').and.callFake(() => {
      component.cart.items.pop();
    });
    component.removeFromCart(component.cart.items[0]);
    fixture.detectChanges();
    expect(component['cartService'].removeFromCart).toHaveBeenCalledWith('123');
    expect(component.cart.items.length).toEqual(0);
});


});
