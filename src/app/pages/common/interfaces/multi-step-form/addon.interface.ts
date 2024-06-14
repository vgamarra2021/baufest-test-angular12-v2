import { FormControl } from '@angular/forms';

export interface IAddon {
  title: string;
  description: string;
  price: number;
  formControlName: string;
  formControl?: FormControl;
  value: boolean;
}
