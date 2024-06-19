import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PrimaryButtonModule } from 'src/app/shared/components/primary-button/primary-button.module';
import { StepHeaderModule } from 'src/app/shared/components/step-header/step-header.module';
import { StepOneContainer } from './step-one.container';
import { StepOneRoutingModule } from './step-one-routing.module';
import { StepOneComponent } from './step-one.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [StepOneComponent, StepOneContainer],
  imports: [
    CommonModule,
    StepOneRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    StepHeaderModule,
    PrimaryButtonModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [StepOneContainer],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class StepOneModule {}
