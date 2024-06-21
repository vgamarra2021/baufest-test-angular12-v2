import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SecondaryButtonComponent } from './secondary-button.component';

describe('SecondaryButtonComponent', () => {
  let component: SecondaryButtonComponent;
  let fixture: ComponentFixture<SecondaryButtonComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecondaryButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondaryButtonComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should trigger the onClick event', () => {
    spyOn(component.onClick, 'emit');
    const button = debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null);
    expect(component.onClick.emit).toHaveBeenCalled();
  });
});
