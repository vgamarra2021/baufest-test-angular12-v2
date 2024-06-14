import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepTwoContainer } from './step-two.container';

const routes: Routes = [{ path: '', component: StepTwoContainer }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StepTwoRoutingModule {}
