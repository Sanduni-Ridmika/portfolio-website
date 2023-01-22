import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, inject, async } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';

import { UserService } from './user.service';
import { ToastrModule } from 'ngx-toastr';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService]
    });
  });

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [UserService]
  }));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ToastrModule.forRoot()],

    })
      .compileComponents();
  }));


  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));
});
