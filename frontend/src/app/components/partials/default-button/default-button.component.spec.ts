import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DefaultButtonComponent } from './default-button.component';

describe('DefaultButtonComponent', () => {
  let component: DefaultButtonComponent;
  let fixture: ComponentFixture<DefaultButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit onClick event when clicked', () => {
    spyOn(component.onClick, 'emit');
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    expect(component.onClick.emit).toHaveBeenCalled();
  });

  it('should have correct text', () => {
    component.text = 'Text';
    fixture.detectChanges();
    const button = fixture.debugElement.nativeElement.querySelector('button');
    expect(button.textContent.trim()).toEqual('Text');
  });

  it('should have correct type', () => {
    component.type = 'button';
    fixture.detectChanges();
    const button = fixture.debugElement.nativeElement.querySelector('button');
    expect(button.getAttribute('type')).toBe('button');
  });

  it('should have correct styles', () => {
    component.bgColor = 'red';
    component.color = 'blue';
    component.fontSizeRem = 1.5;
    component.widthRem = 15;
    fixture.detectChanges();
    const button = fixture.debugElement.nativeElement.querySelector('button');
    expect(button.style.backgroundColor).toBe('red');
    expect(button.style.color).toBe('blue');
    expect(button.style.fontSize).toBe('1.5rem');
    expect(button.style.width).toBe('15rem');
  });
});
