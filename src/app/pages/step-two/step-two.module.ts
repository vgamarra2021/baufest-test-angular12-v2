import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterModule } from '@angular/router';
import { PlanCardModule } from 'src/app/shared/components/plan-card/plan-card.module';
import { PrimaryButtonModule } from 'src/app/shared/components/primary-button/primary-button.module';
import { SecondaryButtonModule } from 'src/app/shared/components/secondary-button/secondary-button.module';
import { StepHeaderModule } from 'src/app/shared/components/step-header/step-header.module';
import { StepTwoRoutingModule } from './step-two-routing.module';
import { StepTwoComponent } from './step-two.component';
import { StepTwoContainer } from './step-two.container';

@NgModule({
  declarations: [StepTwoComponent, StepTwoContainer],
  imports: [
    CommonModule,
    StepTwoRoutingModule,
    StepHeaderModule,
    PrimaryButtonModule,
    SecondaryButtonModule,
    MatSlideToggleModule,
    PlanCardModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [StepTwoContainer],
})
export class StepTwoModule {}
