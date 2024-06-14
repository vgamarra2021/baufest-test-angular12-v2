import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-step-one-ui',
  templateUrl: './step-one.component.html',
  styles: [],
})
export class StepOneComponent {
  @Input() formGroup!: FormGroup;
  @Output() onNextStep = new EventEmitter<void>();
}
