import { Location } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { MultiStepFormService } from '../common/services/multi-step-form/multi-step-form.service';
import { StepThreeContainer } from './step-three.container';

describe('StepThreeContainer', () => {
  let component: StepThreeContainer;
  let fixture: ComponentFixture<StepThreeContainer>;
  let location: Location;
  let multiStepFormServiceSpy: jasmine.SpyObj<MultiStepFormService>;

  beforeEach(async () => {
    const multiStepFormService = jasmine.createSpyObj(
      'MultiStepFormService',
      ['stepThreeData'],
      {
        stepThreeData: {
          addons: [
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
          ],
        },
      }
    );

    await TestBed.configureTestingModule({
      declarations: [StepThreeContainer],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([
          { path: 'multi-step-form/step-four', component: StepThreeContainer },
          { path: 'multi-step-form/step-two', component: StepThreeContainer },
        ]),
      ],
      providers: [
        { provide: MultiStepFormService, useValue: multiStepFormService },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
    location = TestBed.inject(Location);
    multiStepFormServiceSpy = TestBed.inject(MultiStepFormService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepThreeContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to Step Two', () => {
    component.onGoBack();
    expect(component).toBeTruthy();
  });

  it('should navigate to step two on onGoBack', async () => {
    component.onGoBack();
    await fixture.whenStable();
    expect(location.path()).toBe('/multi-step-form/step-two');
  });

  it('should navigate to step four on onNextStep', async () => {
    component.onNextStep();
    await fixture.whenStable();
    expect(location.path()).toBe('/multi-step-form/step-four');
  });
});
