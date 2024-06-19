import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MultiStepFormService } from '../common/services/multi-step-form/multi-step-form.service';
import { StepTwoContainer } from './step-two.container';

describe('StepTwoContainer', () => {
  let component: StepTwoContainer;
  let fixture: ComponentFixture<StepTwoContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StepTwoContainer],
      imports: [RouterTestingModule],
      providers: [FormBuilder, MultiStepFormService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepTwoContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
