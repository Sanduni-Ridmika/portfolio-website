import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HomeserviceComponent } from './homeservice.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('HomeserviceComponent', () => {
    let component: HomeserviceComponent;
    let fixture: ComponentFixture<HomeserviceComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
          imports: [
            ReactiveFormsModule,
            FormsModule
          ],
            declarations: [HomeserviceComponent],
            providers: [{ provide: ActivatedRoute, useValue: { params: of({subscribe: 'test'})}} ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]

        })
            .compileComponents();
    }));

    beforeEach(() => TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HomeserviceComponent]
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeserviceComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
