import { Location } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MultiStepFormService } from '../common/services/multi-step-form/multi-step-form.service';
import { StepTwoContainer } from './step-two.container';

describe('StepTwoContainer', () => {
  let component: StepTwoContainer;
  let fixture: ComponentFixture<StepTwoContainer>;
  let router: Router;
  let location: Location;
  let multiStepFormServiceSpy: MultiStepFormService;
  const mockPlan = {
    id: 0,
    name: 'Test Plan',
    monthlyPrice: 10,
  };

  beforeEach(async () => {
    const multiStepFormService = jasmine.createSpyObj('MultiStepFormService', [
      'stepTwoData',
    ]);

    await TestBed.configureTestingModule({
      declarations: [StepTwoContainer],
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'multi-step-form/step-three', component: StepTwoContainer },
          { path: 'multi-step-form/step-one', component: StepTwoContainer },
        ]),
        ReactiveFormsModule,
      ],
      providers: [
        FormBuilder,
        {
          provide: MultiStepFormService,
          useValue: multiStepFormService,
        },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    multiStepFormServiceSpy = TestBed.inject(MultiStepFormService);
    router.initialNavigation();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepTwoContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change Plan', () => {
    component.onChangePlan(mockPlan);
    expect(component.selectedPlan).toEqual(mockPlan);
  });

  it('should change billingType to year', () => {
    component.formGroup.setValue({ isYearly: true });
    component.onChangeBillingType();
    expect(component.billingType).toEqual('year');
  });

  it('should change billingType to month', () => {
    component.formGroup.setValue({ isYearly: false });
    component.onChangeBillingType();
    expect(component.billingType).toEqual('month');
  });

  it('should navigate to step one on onGoBack', async () => {
    component.onGoBack();
    await fixture.whenStable();
    expect(location.path()).toBe('/multi-step-form/step-one');
  });

  it('should navigate to step three and update stepTwoData', async () => {
    component.selectedPlan = mockPlan;
    component.billingType = 'year';
    component.onNextStep();
    expect(multiStepFormServiceSpy.stepTwoData).toEqual({
      selectedPlan: mockPlan,
      billingType: 'year',
    });
    await fixture.whenStable();
    expect(location.path()).toBe('/multi-step-form/step-three');
  });
});
