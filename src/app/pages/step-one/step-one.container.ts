import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.formGroup = this.buildForm();
  }

  private buildForm() {
    return this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.minLength(9)]],
    });
  }
  onNextStep() {
    const isValid = this.formGroup.valid;
    isValid
      ? this.router.navigate(['/multi-step-form/step-two'])
      : this.formGroup.markAllAsTouched();
  }
}
