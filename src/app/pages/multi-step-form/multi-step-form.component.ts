import { Component } from '@angular/core';
import { multiStepFormConstant } from '../common/contants/multi-step-form.contant';

@Component({
  selector: 'app-multi-step-form',
  templateUrl: './multi-step-form.component.html',
  styles: [
    `
      :host {
        flex: 1;
        display: flex;
        @apply items-center justify-center w-full;
      }
      ::ng-deep app-root {
        display: flex;
        height: 100vh;
      }
      .circle {
        border-radius: 100%;
      }
      a.active {
        @apply bg-gray-900;
      }
    `,
  ],
})
export class MultiStepFormComponent {
  navItems = multiStepFormConstant;
}
