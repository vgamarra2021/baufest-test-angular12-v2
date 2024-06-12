import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodeCardComponent } from './episode-card.component';
import { PrimaryButtonModule } from '../primary-button/primary-button.module';
import { CardFeatureModule } from '../card-feature/card-feature.module';

@NgModule({
  declarations: [EpisodeCardComponent],
  imports: [CommonModule, PrimaryButtonModule, CardFeatureModule],
  exports: [EpisodeCardComponent],
})
export class EpisodeCardModule {}
