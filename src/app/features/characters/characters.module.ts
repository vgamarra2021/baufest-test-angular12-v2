import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CharacterCardComponent } from './components/character-card/character-card.component';
import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersContainerComponent } from './components/characters-container/characters-container.component';
import { CustomPaginatorModule } from 'src/app/shared/custom-paginator/custom-paginator.module';
import { CardFeatureModule } from 'src/app/shared/card-feature/card-feature.module';
import { PrimaryButtonModule } from 'src/app/shared/primary-button/primary-button.module';

@NgModule({
  declarations: [CharacterCardComponent, CharactersContainerComponent],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    CustomPaginatorModule,
    CardFeatureModule,
    PrimaryButtonModule,
    CustomPaginatorModule
  ],
})
export class CharactersModule {}
