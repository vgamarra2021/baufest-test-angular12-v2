import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodesSectionContainer } from './episodes-section.container';

const routes: Routes = [{ path: '', component: EpisodesSectionContainer }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EpisodesRoutingModule {}
