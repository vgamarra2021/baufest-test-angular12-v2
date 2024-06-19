import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MultiStepFormService } from '../common/services/multi-step-form/multi-step-form.service';

import { StepThreeContainer } from './step-three.container';

describe('StepThreeContainer', () => {
  let component: StepThreeContainer;
  let fixture: ComponentFixture<StepThreeContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StepThreeContainer],
      imports: [ReactiveFormsModule, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepThreeContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
