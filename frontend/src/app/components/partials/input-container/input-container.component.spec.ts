import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InputContainerComponent } from './input-container.component';
import { By } from '@angular/platform-browser';

describe('InputContainerComponent', () => {
  let component: InputContainerComponent;
  let fixture: ComponentFixture<InputContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the label text', () => {
    component.label = 'Test Label';
    fixture.detectChanges();
    const label = fixture.debugElement.query(By.css('label')).nativeElement;
    expect(label.textContent).toBe('Test Label');
  });

  it('should set the background color', () => {
    component.bgColor = 'red';
    fixture.detectChanges();
    const container = fixture.debugElement.query(By.css('.container')).nativeElement;
    expect(container.style.backgroundColor).toBe('red');
  });
});
