import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { StepOneContainer } from './step-one.container';

describe('StepOneContainer', () => {
  let component: StepOneContainer;
  let fixture: ComponentFixture<StepOneContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StepOneContainer],
      imports: [ReactiveFormsModule, RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepOneContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
