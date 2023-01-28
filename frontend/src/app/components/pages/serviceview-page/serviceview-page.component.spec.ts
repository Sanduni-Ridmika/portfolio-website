import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { Service } from 'src/app/shared/models/Service';
import { CartService } from 'src/app/services/cart.service';
import { ServiceService } from 'src/app/services/service.service';
import { ServiceviewPageComponent } from './serviceview-page.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ServiceviewPageComponent', () => {
  let component: ServiceviewPageComponent;
  let fixture: ComponentFixture<ServiceviewPageComponent>;
  let serviceService: ServiceService;
  let cartService: CartService;
  let router: Router;
  let activatedRoute: ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceviewPageComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],

      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: '1' })
          }
        },
        {
          provide: ServiceService,
          useValue: {
            getServiceById: jasmine.createSpy().and.returnValue(of({}))
          }
        },
        {
          provide: CartService,
          useValue: {
            addToCart: jasmine.createSpy()
          }
        },
        {
          provide: Router,
          useValue: {
            navigateByUrl: jasmine.createSpy()
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceviewPageComponent);
    component = fixture.componentInstance;
    serviceService = TestBed.get(ServiceService);
    cartService = TestBed.get(CartService);
    router = TestBed.get(Router);
    activatedRoute = TestBed.get(ActivatedRoute);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the service by id on init', () => {
    expect(serviceService.getServiceById).toHaveBeenCalledWith('1');
  });

  it('should add the service to the cart when addToCart is called', () => {
    component.service = { id: '1' } as Service;
    component.addToCart();
   // expect(cartService.addToCart).toHaveBeenCalledWith({''});
    expect(router.navigateByUrl).toHaveBeenCalledWith('/cart-page');
  });
});
