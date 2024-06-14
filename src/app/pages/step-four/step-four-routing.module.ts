import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepFourContainer } from './step-four.container';

const routes: Routes = [{ path: '', component: StepFourContainer }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StepFourRoutingModule {}
