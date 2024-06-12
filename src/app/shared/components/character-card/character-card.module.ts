import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardFeatureModule } from '../card-feature/card-feature.module';
import { PrimaryButtonModule } from '../primary-button/primary-button.module';
import { CharacterCardComponent } from './character-card.component';

@NgModule({
  declarations: [CharacterCardComponent],
  imports: [CommonModule, CardFeatureModule, PrimaryButtonModule],
  exports: [CharacterCardComponent],
})
export class CharacterCardModule {}
