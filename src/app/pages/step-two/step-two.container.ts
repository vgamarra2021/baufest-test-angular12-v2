import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { multiStepFormPlansConstant } from '../common/contants/multi-step-form-plans.constant';
import { IPlan } from '../common/interfaces/multi-step-form/plan.interface';

@Component({
  selector: 'app-step-two-container',
  templateUrl: './step-two.container.html',
  styles: [
    `
      :host {
        @apply w-full;
      }

      mat-form-field.mat-form-field {
        @apply text-base;
      }
    `,
  ],
})
export class StepTwoContainer {
  plans = multiStepFormPlansConstant;
  selectedPlan: IPlan = multiStepFormPlansConstant[1];
  billingType = 'month';
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.formGroup = this.buildForm();
  }

  private buildForm() {
    return this.formBuilder.group({
      isYearly: false,
    });
  }

  onChangePlan(plan: IPlan) {
    this.selectedPlan = plan;
  }

  onChangeBillingType() {
    const isYearly = this.formGroup.value?.isYearly;
    isYearly ? (this.billingType = 'year') : (this.billingType = 'month');
  }

  onNextStep() {
    this.router.navigate(['/multi-step-form/step-three']);
  }

  onGoBack() {
    this.router.navigate(['/multi-step-form/step-one']);
  }
}
