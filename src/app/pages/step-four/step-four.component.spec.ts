import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StepFourComponent } from './step-four.component';

describe('StepFourComponent', () => {
  let component: StepFourComponent;
  let fixture: ComponentFixture<StepFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StepFourComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepFourComponent);
    component = fixture.componentInstance;

    component.billingType = 'month';
    component.selectedPlan = { id: 10, monthlyPrice: 9, name: 'NewPlan' };
    component.billingTypeShort = 'mo';
    component.totalMonthPrice = '90';

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
