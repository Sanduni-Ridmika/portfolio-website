import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
          imports: [HttpClientTestingModule],
            declarations: [ServiceviewPageComponent],
            providers: [{ provide: ActivatedRoute, useValue: {params: of({service: 'test'})}}],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]


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
