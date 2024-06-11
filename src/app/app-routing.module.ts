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
        (m) => m.EpisodesModule
      ),
  },
  { path: '**', redirectTo: 'characters' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
