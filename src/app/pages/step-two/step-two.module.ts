import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepTwoRoutingModule } from './step-two-routing.module';
import { StepTwoComponent } from './step-two.component';


@NgModule({
  declarations: [
    StepTwoComponent
  ],
  imports: [
    CommonModule,
    StepTwoRoutingModule
  ]
})
export class StepTwoModule { }
