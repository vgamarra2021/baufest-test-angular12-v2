import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultiStepFormComponent } from './multi-step-form.component';

const routes: Routes = [
  {
    path: '',
    component: MultiStepFormComponent,
    children: [
      {
        path: 'step-one',
        loadChildren: () =>
          import('../step-one/step-one.module').then((m) => m.StepOneModule),
      },
      {
        path: 'step-two',
        loadChildren: () =>
          import('../step-two/step-two.module').then((m) => m.StepTwoModule),
      },
      {
        path: 'step-three',
        loadChildren: () =>
          import('../step-three/step-three.module').then(
            (m) => m.StepThreeModule
          ),
      },
      {
        path: 'step-four',
        loadChildren: () =>
          import('../step-four/step-four.module').then((m) => m.StepFourModule),
      },
      { path: '**', redirectTo: 'step-one' },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MultiStepFormRoutingModule {}
