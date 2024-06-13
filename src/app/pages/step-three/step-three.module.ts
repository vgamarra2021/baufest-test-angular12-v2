import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepThreeRoutingModule } from './step-three-routing.module';
import { StepThreeComponent } from './step-three.component';


@NgModule({
  declarations: [
    StepThreeComponent
  ],
  imports: [
    CommonModule,
    StepThreeRoutingModule
  ]
})
export class StepThreeModule { }
