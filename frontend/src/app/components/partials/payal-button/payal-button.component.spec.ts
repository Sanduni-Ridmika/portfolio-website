import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';

import { PayalButtonComponent } from './payal-button.component';
import { ToastrModule } from 'ngx-toastr';

describe('PayalButtonComponent', () => {
    let component: PayalButtonComponent;
    let fixture: ComponentFixture<PayalButtonComponent>;

    beforeEach(() => TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    }));

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PayalButtonComponent]
        })
            .compileComponents();
    }));

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [ToastrModule.forRoot()],
      })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PayalButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
