import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HomeserviceComponent } from './homeservice.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
