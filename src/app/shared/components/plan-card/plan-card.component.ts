import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPlan } from 'src/app/pages/common/interfaces/multi-step-form/plan.interface';

@Component({
  selector: 'app-plan-card',
  templateUrl: './plan-card.component.html',
  styles: [],
})
export class PlanCardComponent {
  @Input() plan!: IPlan;
  @Input() billingType!: string;
  @Input() isActive: boolean = false;
  @Output() onChangePlan = new EventEmitter<IPlan>();
}
