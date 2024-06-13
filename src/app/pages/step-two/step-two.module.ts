import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepTwoRoutingModule } from './step-two-routing.module';
import { StepTwoComponent } from './step-two.component';
import { StepHeaderModule } from 'src/app/shared/components/step-header/step-header.module';
import { PrimaryButtonModule } from 'src/app/shared/components/primary-button/primary-button.module';
import { SecondaryButtonModule } from 'src/app/shared/components/secondary-button/secondary-button.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { PlanCardModule } from 'src/app/shared/components/plan-card/plan-card.module';

@NgModule({
  declarations: [StepTwoComponent],
  imports: [
    CommonModule,
    StepTwoRoutingModule,
    StepHeaderModule,
    PrimaryButtonModule,
    SecondaryButtonModule,
    MatSlideToggleModule,
    PlanCardModule,
  ],
  exports: [StepTwoComponent],
})
export class StepTwoModule {}
