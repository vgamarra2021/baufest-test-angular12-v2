import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PrimaryButtonModule } from 'src/app/shared/components/primary-button/primary-button.module';
import { SecondaryButtonModule } from 'src/app/shared/components/secondary-button/secondary-button.module';
import { StepHeaderModule } from 'src/app/shared/components/step-header/step-header.module';
import { StepFourRoutingModule } from './step-four-routing.module';
import { StepFourComponent } from './step-four.component';
import { StepFourContainer } from './step-four.container';

@NgModule({
  declarations: [StepFourComponent, StepFourContainer],
  imports: [
    CommonModule,
    StepFourRoutingModule,
    StepHeaderModule,
    PrimaryButtonModule,
    SecondaryButtonModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [StepFourContainer],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class StepFourModule {}
