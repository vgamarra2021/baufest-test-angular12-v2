import { Component, forwardRef, Input } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { IAddon } from 'src/app/pages/common/interfaces/multi-step-form/addon.interface';

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
  @Input() addon!: IAddon;

  public formControl: FormControl = new FormControl();

  writeValue(addon: IAddon) {
    this.formControl.setValue(addon.value);
  }

  registerOnChange(fn: Function) {
    this.formControl.valueChanges.subscribe((val) => {
      this.addon.value = val;
      fn(this.addon);
    });
  }

  registerOnTouched(fn: Function) {
    this.formControl.valueChanges.subscribe((val) => {
      this.addon.value = val;
      fn(this.addon);
    });
  }
}
