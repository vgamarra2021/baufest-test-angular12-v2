import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepThreeRoutingModule } from './step-three-routing.module';
import { StepThreeComponent } from './step-three.component';
import { StepHeaderModule } from 'src/app/shared/components/step-header/step-header.module';
import { PrimaryButtonModule } from 'src/app/shared/components/primary-button/primary-button.module';
import { SecondaryButtonModule } from 'src/app/shared/components/secondary-button/secondary-button.module';

@NgModule({
  declarations: [StepThreeComponent],
  imports: [
    CommonModule,
    StepThreeRoutingModule,
    StepHeaderModule,
    PrimaryButtonModule,
    SecondaryButtonModule,
  ],
  exports: [StepThreeComponent],
})
export class StepThreeModule {}
