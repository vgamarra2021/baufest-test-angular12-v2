import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IYourInfo } from '../common/interfaces/multi-step-form/your-info.interface';

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

  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.buildForm();
  }

  private buildForm() {
    return this.formBuilder.group({
      name: '',
      email: '',
      phoneNumber: '',
    });
  }
  onNextStep(data: IYourInfo) {}
}
