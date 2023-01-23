import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';

import { LoginPageComponent } from './login-page.component';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async () => {
    let mockActivatedRoute = {
      snapshot: {
        queryParams: {
          navigateByUrl: (returnUrl: any)=> {
          }
      }
    }
  }
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        [HttpClientTestingModule],
        [ToastrModule.forRoot()]
      ],
      declarations: [ LoginPageComponent ],
      providers: [
        {LoginPageComponent},
        {ActivatedRoute}
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
