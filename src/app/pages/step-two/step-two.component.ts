import { Component, Input } from '@angular/core';
import { multiStepFormPlansConstant } from '../common/contants/multi-step-form-plans.constant';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
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
export class StepTwoComponent {
  plans = multiStepFormPlansConstant;
  @Input() billingType!: string;
}
