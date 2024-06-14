import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IAddon } from '../common/interfaces/multi-step-form/addon.interface';
import { MultiStepFormService } from '../common/services/multi-step-form/multi-step-form.service';

@Component({
  selector: 'app-step-four-container',
  templateUrl: './step-four.container.html',
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
export class StepFourContainer {
  selectedAddons: IAddon[] = this.service.stepThreeData.addons.filter(
    (addon) => addon.value
  );
  billingType = this.service.stepTwoData.billingType;
  selectedPlan = this.service.stepTwoData.selectedPlan;

  constructor(private service: MultiStepFormService, private router: Router) {}

  onNextStep() {
    console.log(this.service.stepOneData);
    console.log(this.service.stepTwoData);
    console.log(this.service.stepThreeData);
  }

  onGoBack() {
    this.router.navigate(['/multi-step-form/step-three']);
  }

  get totalMonthPrice() {
    let acum = 0;
    this.selectedAddons.forEach((addon) => (acum += addon.price));
    acum += this.selectedPlan.monthlyPrice;
    if (this.billingType === 'month') return acum.toString();
    return (acum * 12).toString();
  }

  get billingTypeShort() {
    let index;
    if (this.billingType === 'month') {
      index = 2;
    } else {
      index = 4;
    }
    return this.billingType.substring(0, index);
  }
}
