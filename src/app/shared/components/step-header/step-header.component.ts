import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-step-header',
  templateUrl: './step-header.component.html',
  styles: [
    `
      :host {
        @apply flex flex-col w-full;
      }
    `,
  ],
})
export class StepHeaderComponent {
  @Input() title!: string;
  @Input() description!: string;
}
