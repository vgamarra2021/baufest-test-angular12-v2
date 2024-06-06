import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-feature',
  templateUrl: './card-feature.component.html',
  styles: [
    `
      :host {
        @apply w-full;
      }
    `,
  ],
})
export class CardFeatureComponent {
  @Input() value: string | number = '';
}
