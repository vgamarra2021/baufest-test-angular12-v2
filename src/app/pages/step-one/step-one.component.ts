import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styles: [
    `
      :host {
        @apply w-full;
      }

      mat-form-field.mat-form-field {
        @apply text-base
      }
    `,
  ],
})
export class StepOneComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
