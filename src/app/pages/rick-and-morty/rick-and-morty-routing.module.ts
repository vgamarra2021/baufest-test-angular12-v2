import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RickAndMortyComponent } from './rick-and-morty.component';

const routes: Routes = [
  {
    path: '',
    component: RickAndMortyComponent,
    children: [
      {
        path: 'characters',
        loadChildren: () =>
          import('../characters-section/characters-section.module').then(
            (m) => m.CharactersSectionModule
          ),
      },
      {
        path: 'episodes',
        loadChildren: () =>
          import('../episodes-section/episodes-section.module').then(
            (m) => m.EpisodesSectionModule
          ),
      },
      {
        path: 'locations',
        loadChildren: () =>
          import('../locations-section/locations-section.module').then(
            (m) => m.LocationsSectionModule
          ),
      },
      { path: '**', redirectTo: 'characters' },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RickAndMortyRoutingModule {}
