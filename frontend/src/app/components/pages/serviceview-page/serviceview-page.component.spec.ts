import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { ServiceviewPageComponent } from './serviceview-page.component';

describe('ServiceviewPageComponent', async () => {
    let component: ServiceviewPageComponent;
    let fixture: ComponentFixture<ServiceviewPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ServiceviewPageComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ServiceviewPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
