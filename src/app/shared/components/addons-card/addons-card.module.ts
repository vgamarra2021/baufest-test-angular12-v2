import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddonsCardComponent } from './addons-card.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddonsCardComponent],
  imports: [CommonModule, MatCheckboxModule, ReactiveFormsModule],
  exports: [AddonsCardComponent],
})
export class AddonsCardModule {}
