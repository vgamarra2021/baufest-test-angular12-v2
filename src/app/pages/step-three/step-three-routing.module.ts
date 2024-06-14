import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepThreeContainer } from './step-three.container';

const routes: Routes = [{ path: '', component: StepThreeContainer }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StepThreeRoutingModule {}
