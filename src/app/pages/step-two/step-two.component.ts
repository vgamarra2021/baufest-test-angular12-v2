import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IPlan } from '../common/interfaces/multi-step-form/plan.interface';

@Component({
  selector: 'app-step-two-ui',
  templateUrl: './step-two.component.html',
  styles: [],
})
export class StepTwoComponent {
  @Input() plans!: IPlan[];
  @Input() selectedPlan!: IPlan;
  @Input() billingType!: string;
  @Input() formGroup!: FormGroup;
  @Output() onChangePlan = new EventEmitter<IPlan>();
  @Output() onChangeBillingType = new EventEmitter<string>();
  @Output() onNextStep = new EventEmitter<void>();
}
