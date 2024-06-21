import {
  CUSTOM_ELEMENTS_SCHEMA, forwardRef
} from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule
} from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AddonsCardComponent } from './addons-card.component';

describe('AddonsCardComponent', () => {
  let component: AddonsCardComponent;
  let fixture: ComponentFixture<AddonsCardComponent>;
  let onChangeSpy: jasmine.Spy;
  let onTouchedSpy: jasmine.Spy;

  //TODO: Falta cubrir useExisting: forwardRef(() => AddonsCardComponent)
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddonsCardComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [ReactiveFormsModule, MatCheckboxModule],
      providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => AddonsCardComponent),
          multi: true,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddonsCardComponent);
    component = fixture.componentInstance;
    component.addon = {
      description: 'This is test',
      formControlName: 'test-control',
      price: 90,
      title: 'test',
      value: true,
    };

    onChangeSpy = jasmine.createSpy('onChangeSpy');
    onTouchedSpy = jasmine.createSpy('onTouchedSpy');
    component.registerOnChange(onChangeSpy);
    component.registerOnTouched(onTouchedSpy);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should register as ControlValueAccessor', () => {
    const controlValueAccessor: ControlValueAccessor = component;
    expect(controlValueAccessor).toBeTruthy();
  });

  it('should call registered onChange', () => {
    component.formControl.setValue(true);
    expect(onChangeSpy).toHaveBeenCalledWith({
      ...component.addon,
      value: true,
    });
  });

  it('should call registered onChange', () => {
    component.formControl.setValue(false);
    expect(onTouchedSpy).toHaveBeenCalledWith({
      ...component.addon,
      value: false,
    });
  });

  it('should update formControl', () => {
    component.writeValue({ ...component.addon, value: true });
    expect(component.formControl.value).toBe(true);
  });

});
