import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MultiStepFormService } from '../common/services/multi-step-form/multi-step-form.service';

@Component({
  selector: 'app-step-one-container',
  templateUrl: './step-one.container.html',
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
export class StepOneContainer {
  formGroup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private multiStepFormService: MultiStepFormService
  ) {
    this.formGroup = this.buildForm();
  }

  private buildForm() {
    return this.formBuilder.group({
      name: [this.multiStepFormService.stepOneData.name, Validators.required],
      email: [
        this.multiStepFormService.stepOneData.email,
        [Validators.required, Validators.email],
      ],
      phoneNumber: [
        this.multiStepFormService.stepOneData.phoneNumber,
        [Validators.required, Validators.minLength(9)],
      ],
    });
  }
  
  onNextStep() {
    const isValid = this.formGroup.valid;
    this.multiStepFormService.stepOneData = this.formGroup.value;
    isValid
      ? this.router.navigate(['/multi-step-form/step-two'])
      : this.formGroup.markAllAsTouched();
  }
}
