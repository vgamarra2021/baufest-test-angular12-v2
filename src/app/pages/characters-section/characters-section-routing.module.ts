import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersSectionContainer } from './characters-section.container';

const routes: Routes = [{ path: '', component: CharactersSectionContainer }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharactersSectionRoutingModule {}
