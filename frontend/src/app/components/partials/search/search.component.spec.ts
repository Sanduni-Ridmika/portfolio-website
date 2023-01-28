import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
    let component: SearchComponent;
    let fixture: ComponentFixture<SearchComponent>;
    let router: Router;


    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SearchComponent],
            providers: [{ provide: ActivatedRoute, useValue: {params: of({searchTerm: 'test'})}}]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchComponent);
        component = fixture.componentInstance;
        router = TestBed.get(Router);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should set searchTerm', () => {
      expect(component.searchTerm).toBe('test');
    });

    it('should navigate to search with search term', () => {
      spyOn(router, 'navigateByUrl');
      component.search('test2');
      expect(router.navigateByUrl).toHaveBeenCalledWith('/search/test2');
    });
});
