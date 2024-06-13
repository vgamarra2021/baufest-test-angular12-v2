import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepOneRoutingModule } from './step-one-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { StepOneComponent } from './step-one.component';
import { PrimaryButtonModule } from 'src/app/shared/components/primary-button/primary-button.module';
import { StepHeaderModule } from 'src/app/shared/components/step-header/step-header.module';

@NgModule({
  declarations: [StepOneComponent],
  imports: [
    CommonModule,
    StepOneRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    StepHeaderModule,
    PrimaryButtonModule,
  ],
  exports: [StepOneComponent],
})
export class StepOneModule {}
