import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { CheckoutPageComponent } from './checkout-page.component';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';

describe('CheckoutPageComponent', () => {
  let component: CheckoutPageComponent;
  let fixture: ComponentFixture<CheckoutPageComponent>;
  let cartService: CartService;
  let userService: UserService;
  let toastrService: ToastrService;
  let orderService: OrderService;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutPageComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
        ToastrModule.forRoot()
      ],

      providers: [
        CartService,
        UserService,
        ToastrService,
        OrderService,
        Router
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutPageComponent);
    component = fixture.componentInstance;
    cartService = TestBed.get(CartService);
    userService = TestBed.get(UserService);
    toastrService = TestBed.get(ToastrService);
    orderService = TestBed.get(OrderService);
    router = TestBed.get(Router);
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show an error message when the form is submitted with empty inputs', () => {
    spyOn(toastrService, 'warning');
    component.fc.name.setValue('');
    component.fc.address.setValue('');
    component.createOrder();
    expect(toastrService.warning).toHaveBeenCalledWith('Please fill the Inputs', 'Invalid Inputs');
  });
});
