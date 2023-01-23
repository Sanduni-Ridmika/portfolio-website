import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

import { CheckoutPageComponent } from './checkout-page.component';
imports: {RouterModule.forRoot([])}


describe('CheckoutPageComponent', () => {
    let component: CheckoutPageComponent;
    let fixture: ComponentFixture<CheckoutPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
          imports: [
            ReactiveFormsModule,
            FormsModule,
            [ToastrModule.forRoot()]
          ],
            declarations: [CheckoutPageComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CheckoutPageComponent]
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CheckoutPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
