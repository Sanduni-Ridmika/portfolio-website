import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { of } from 'rxjs';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { ServiceviewPageComponent } from './serviceview-page.component';

describe('ServiceviewPageComponent', async () => {
    let component: ServiceviewPageComponent;
    let fixture: ComponentFixture<ServiceviewPageComponent>;
    const activatedRouteSpy = jasmine.createSpyObj('ActivatedRoute', ['snapshot'])
    const routerSpy = jasmine.createSpyObj('Router',['navigate'])

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ServiceviewPageComponent]
        })
          .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ServiceviewPageComponent);
        component = fixture.componentInstance;

        activatedRouteSpy.snapshot.and.returnValues(new ActivatedRouteSnapshot)
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
