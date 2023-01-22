import { async, ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { TagsComponent } from './tags.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';

describe('TagsComponent', () => {
    let component: TagsComponent;
    let fixture: ComponentFixture<TagsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TagsComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TagsComponent]
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TagsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
