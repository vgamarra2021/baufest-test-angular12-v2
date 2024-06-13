import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'rick-and-morty',
    loadChildren: () =>
      import('./pages/rick-and-morty/rick-and-morty.module').then(
        (m) => m.RickAndMortyModule
      ),
  },
  {
    path: 'multi-step-form',
    loadChildren: () =>
      import('./pages/multi-step-form/multi-step-form.module').then(
        (m) => m.MultiStepFormModule
      ),
  },
  { path: '**', redirectTo: 'rick-and-morty' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
