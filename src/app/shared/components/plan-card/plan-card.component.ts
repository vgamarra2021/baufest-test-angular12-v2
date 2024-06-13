import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-plan-card',
  templateUrl: './plan-card.component.html',
  styles: [],
})
export class PlanCardComponent {
  @Input() price!: number;
  @Input() title!: string;
  @Input() billingType!: string;
  @Input() isActive: boolean = false;
}
