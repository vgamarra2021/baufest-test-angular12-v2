import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepOneContainer } from './step-one.container';

const routes: Routes = [{ path: '', component: StepOneContainer }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StepOneRoutingModule {}
