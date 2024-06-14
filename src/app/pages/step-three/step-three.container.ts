import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { multiStepFormAddonsConstant } from '../common/contants/multi-step-form-addons.constant';

@Component({
  selector: 'app-step-three-container',
  templateUrl: './step-three.container.html',
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
export class StepThreeContainer {
  addons = multiStepFormAddonsConstant;
  formGroup!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.formGroup = this.fb.group({});
    this.addons.forEach((addon) => {
      this.formGroup.addControl(
        addon.formControlName,
        new FormControl(addon.initialValue)
      );
    });
  }

  onNextStep() {
    this.router.navigate(['/multi-step-form/step-four']);
  }

  onGoBack() {
    this.router.navigate(['/multi-step-form/step-two']);
  }
}
