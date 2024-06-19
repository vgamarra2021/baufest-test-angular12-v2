import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepThreeRoutingModule } from './step-three-routing.module';
import { StepThreeComponent } from './step-three.component';
import { StepHeaderModule } from 'src/app/shared/components/step-header/step-header.module';
import { PrimaryButtonModule } from 'src/app/shared/components/primary-button/primary-button.module';
import { SecondaryButtonModule } from 'src/app/shared/components/secondary-button/secondary-button.module';
import { AddonsCardModule } from 'src/app/shared/components/addons-card/addons-card.module';
import { ReactiveFormsModule } from '@angular/forms';
import { StepThreeContainer } from './step-three.container';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [StepThreeComponent, StepThreeContainer],
  imports: [
    CommonModule,
    StepThreeRoutingModule,
    StepHeaderModule,
    PrimaryButtonModule,
    SecondaryButtonModule,
    ReactiveFormsModule,
    AddonsCardModule,
    MatCheckboxModule,
    RouterModule
  ],
  exports: [StepThreeContainer],
})
export class StepThreeModule {}
