import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { StepTwoComponent } from './step-two.component';

describe('StepTwoComponent', () => {
  let component: StepTwoComponent;
  let fixture: ComponentFixture<StepTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StepTwoComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [ReactiveFormsModule, MatSlideToggleModule],
    }).compileComponents();
  });

  beforeEach(() => {
    const formBuilder = TestBed.inject(FormBuilder);
    fixture = TestBed.createComponent(StepTwoComponent);
    component = fixture.componentInstance;
    component.formGroup = formBuilder.group({
      isYearly: false,
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
