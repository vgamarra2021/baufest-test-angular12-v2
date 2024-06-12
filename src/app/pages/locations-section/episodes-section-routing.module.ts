import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationsSectionContainer } from './locations-section.container';

const routes: Routes = [{ path: '', component: LocationsSectionContainer }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationsRoutingModule {}
