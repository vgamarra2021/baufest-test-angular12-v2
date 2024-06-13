import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepFourRoutingModule } from './step-four-routing.module';
import { StepFourComponent } from './step-four.component';
import { StepHeaderModule } from 'src/app/shared/components/step-header/step-header.module';
import { PrimaryButtonModule } from 'src/app/shared/components/primary-button/primary-button.module';
import { SecondaryButtonModule } from 'src/app/shared/components/secondary-button/secondary-button.module';

@NgModule({
  declarations: [StepFourComponent],
  imports: [
    CommonModule,
    StepFourRoutingModule,
    StepHeaderModule,
    PrimaryButtonModule,
    SecondaryButtonModule,
  ],
  exports: [StepFourComponent],
})
export class StepFourModule {}
