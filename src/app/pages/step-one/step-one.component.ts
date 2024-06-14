import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IYourInfo } from '../common/interfaces/multi-step-form/your-info.interface';

@Component({
  selector: 'app-step-one-ui',
  templateUrl: './step-one.component.html',
  styles: [],
})
export class StepOneComponent {
  @Input() formGroup!: FormGroup;
  @Output() onNextStep = new EventEmitter<IYourInfo>();
}
