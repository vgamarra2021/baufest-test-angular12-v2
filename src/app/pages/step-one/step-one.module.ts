import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepOneRoutingModule } from './step-one-routing.module';
import { StepOneComponent } from './step-one.component';

@NgModule({
  declarations: [StepOneComponent],
  imports: [CommonModule, StepOneRoutingModule],
  exports: [StepOneComponent],
})
export class StepOneModule {}
