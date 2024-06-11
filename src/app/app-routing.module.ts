import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'characters',
    loadChildren: () =>
      import('./features/characters-section/characters-section.module').then(
        (m) => m.CharactersSectionModule
      ),
  },
  {
    path: 'episodes',
    loadChildren: () =>
      import('./features/episodes-section/episodes-section.module').then(
        (m) => m.EpisodesSectionModule
      ),
  },
  {
    path: 'locations',
    loadChildren: () =>
      import('./features/locations-section/locations-section.module').then(
        (m) => m.LocationsSectionModule
      ),
  },
  { path: '**', redirectTo: 'characters' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
