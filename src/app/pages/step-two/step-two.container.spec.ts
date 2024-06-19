import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
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
