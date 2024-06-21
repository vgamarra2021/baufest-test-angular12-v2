import { Location } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MultiStepFormService } from '../common/services/multi-step-form/multi-step-form.service';
import { StepTwoContainer } from '../step-two/step-two.container';
import { StepOneContainer } from './step-one.container';

describe('StepOneContainer', () => {
  let component: StepOneContainer;
  let fixture: ComponentFixture<StepOneContainer>;
  let location: Location;

  beforeEach(async () => {
    const multiStepFormService = jasmine.createSpyObj(
      'MultiStepFormService',
      ['stepOneData'],
      {
        stepOneData: {
          name: '',
          email: '',
          phoneNumber: '',
        },
      }
    );
    await TestBed.configureTestingModule({
      declarations: [StepOneContainer],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([
          { path: 'multi-step-form/step-two', component: StepTwoContainer },
        ]),
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: MultiStepFormService, useValue: multiStepFormService },
      ],
    }).compileComponents();
    location = TestBed.inject(Location);
    const router = TestBed.inject(Router);
    router.initialNavigation();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepOneContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate and navigate to next step', async () => {
    component.formGroup.setValue({
      name: 'Test',
      email: 'test@gmail.com',
      phoneNumber: '987654321',
    });
    component.onNextStep();
    await fixture.whenStable();
    expect(component.formGroup.valid).toBeTrue();
    expect(location.path()).toBe('/multi-step-form/step-two');
  });

  it('should fail validation', async () => {
    component.formGroup.setValue({
      name: 'Test',
      email: 'test',
      phoneNumber: '987654321',
    });
    component.onNextStep();
    await fixture.whenStable();
    expect(component.formGroup.valid).toBeFalse();
    expect(location.path()).toBe('/');
  });
});
