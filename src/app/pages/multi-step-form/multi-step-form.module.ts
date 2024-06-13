import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MultiStepFormRoutingModule } from './multi-step-form-routing.module';
import { MultiStepFormComponent } from './multi-step-form.component';


@NgModule({
  declarations: [MultiStepFormComponent],
  imports: [CommonModule, MultiStepFormRoutingModule],
  exports: [MultiStepFormComponent],
})
export class MultiStepFormModule {}
