import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CharacterCardModule } from 'src/app/shared/character-card/character-card.module';
import { CustomPaginatorModule } from 'src/app/shared/custom-paginator/custom-paginator.module';
import { CharactersSectionRoutingModule } from './characters-section-routing.module';
import { CharactersSectionComponent } from './characters-section.component';
import { CharactersSectionContainer } from './characters-section.container';

@NgModule({
  declarations: [CharactersSectionContainer, CharactersSectionComponent],
  imports: [
    CommonModule,
    CharactersSectionRoutingModule,
    CharacterCardModule,
    CustomPaginatorModule,
  ],
  exports: [CharactersSectionContainer],
})
export class CharactersSectionModule {}
