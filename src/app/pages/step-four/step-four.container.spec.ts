import { Location } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { StepThreeContainer } from '../step-three/step-three.container';
import { StepFourContainer } from './step-four.container';

describe('StepFourContainer', () => {
  let component: StepFourContainer;
  let fixture: ComponentFixture<StepFourContainer>;
  let router: Router;
  let location: Location;
  let debugElement: DebugElement;
  const mockAddons = [
    {
      title: 'testAddon',
      description: 'testAddonDescription',
      price: 10,
      formControlName: 'test-addon-description',
      formControl: undefined,
      value: true,
    },
    {
      title: 'testAddon2',
      description: 'testAddonDescription2',
      price: 12,
      formControlName: 'test-addon-description-2',
      formControl: undefined,
      value: false,
    },
  ];
  const selectedPlan = {
    id: 2,
    name: 'ADVANCED',
    monthlyPrice: 50,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StepFourContainer],
      imports: [
        RouterTestingModule.withRoutes([
          {
            path: 'multi-step-form/step-three',
            component: StepThreeContainer,
          },
        ]),
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    router.initialNavigation();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepFourContainer);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to step two on onGoBack', async () => {
    component.onGoBack();
    await fixture.whenStable();
    expect(location.path()).toBe('/multi-step-form/step-three');
  });

  it('should update totalMonthPrice', () => {
    component.selectedAddons = mockAddons;
    component.selectedPlan = selectedPlan;
    component.billingType = 'year';
    const expectedPrice = (
      (22 + component.selectedPlan.monthlyPrice) *
      12
    ).toString();
    expect(component.totalMonthPrice).toEqual(expectedPrice);
  });

  it('should update billingTypeShort', () => {
    component.selectedAddons = mockAddons;
    component.billingType = 'year';
    const expectedBillingType = 'year';
    expect(component.billingTypeShort).toEqual(expectedBillingType);
  });

  it('should triggered onNextStep', () => {
    const appStepFourUi = debugElement.query(By.css('app-step-four-ui'));
    const onNextStepSpy = spyOn(component, 'onNextStep').and.callThrough();
    appStepFourUi.triggerEventHandler('onNextStep', null);
    expect(onNextStepSpy).toHaveBeenCalled();
  });
});
