import { Component, forwardRef, Input } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-addons-card',
  templateUrl: './addons-card.component.html',
  styles: [
    `
      mat-checkbox.mat-checkbox {
        @apply -mb-2;
      }
    `,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AddonsCardComponent),
      multi: true,
    },
  ],
})
export class AddonsCardComponent implements ControlValueAccessor {
  @Input() title!: string;
  @Input() description!: string;
  @Input() price!: string;

  public formControl: FormControl = new FormControl();

  writeValue(value: any) {
    this.formControl.setValue(value);
  }

  registerOnChange(fn: Function) {
    this.formControl.valueChanges.subscribe((val) => fn(val));
  }

  registerOnTouched(fn: Function) {
    this.formControl.valueChanges.subscribe((val) => fn(val));
  }
}
