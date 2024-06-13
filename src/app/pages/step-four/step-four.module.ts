import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepFourRoutingModule } from './step-four-routing.module';
import { StepFourComponent } from './step-four.component';


@NgModule({
  declarations: [
    StepFourComponent
  ],
  imports: [
    CommonModule,
    StepFourRoutingModule
  ]
})
export class StepFourModule { }
