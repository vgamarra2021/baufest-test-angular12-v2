import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { multiStepFormAddonsConstant } from '../common/contants/multi-step-form-addons.constant';
import { IAddon } from '../common/interfaces/multi-step-form/addon.interface';
import { MultiStepFormService } from '../common/services/multi-step-form/multi-step-form.service';

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
export class StepThreeContainer implements OnInit {
  addons = this.service.stepThreeData.addons;
  formGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service: MultiStepFormService
  ) {
    this.formGroup = this.formBuilder.group({});
    this.addons.forEach((addon) => {
      this.formGroup.addControl(addon.formControlName, new FormControl(addon));
    });
  }

  ngOnInit(): void {}

  onNextStep() {
    const addons = this.formGroup.value as IAddon[];
    const mapAddons = Object.entries(addons).map(([key, addon]) => addon);

    console.log(mapAddons);
    this.service.stepThreeData.addons = mapAddons;
    this.router.navigate(['/multi-step-form/step-four']);
  }

  onGoBack() {
    this.router.navigate(['/multi-step-form/step-two']);
  }
}
