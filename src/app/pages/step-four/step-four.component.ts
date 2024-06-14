import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IAddon } from '../common/interfaces/multi-step-form/addon.interface';
import { IPlan } from '../common/interfaces/multi-step-form/plan.interface';

@Component({
  selector: 'app-step-four-ui',
  templateUrl: './step-four.component.html',
  styles: [],
})
export class StepFourComponent {
  @Input() selectedAddons!: IAddon[];
  @Input() selectedPlan!: IPlan;
  @Input() billingTypeShort!: string;
  @Input() billingType!: string;
  @Input() totalMonthPrice!: string;
  @Output() onGoBack = new EventEmitter<void>();
  @Output() onNextStep = new EventEmitter<void>();
}
