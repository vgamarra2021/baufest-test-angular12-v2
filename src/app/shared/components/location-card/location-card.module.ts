import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationCardComponent } from './location-card.component';
import { CardFeatureModule } from '../card-feature/card-feature.module';

@NgModule({
  declarations: [LocationCardComponent],
  imports: [CommonModule, CardFeatureModule],
  exports: [LocationCardComponent],
})
export class LocationCardModule {}
