import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IAddon } from '../common/interfaces/multi-step-form/addon.interface';

@Component({
  selector: 'app-step-three-ui',
  templateUrl: './step-three.component.html',
  styles: [
  ],
})
export class StepThreeComponent {
  @Input() addons!: IAddon[];
  @Output() onNextStep = new EventEmitter<void>();
  @Input() formGroup!: FormGroup;
}
