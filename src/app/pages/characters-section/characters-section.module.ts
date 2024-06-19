import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CharacterCardModule } from 'src/app/shared/components/character-card/character-card.module';
import { CustomPaginatorModule } from 'src/app/shared/components/custom-paginator/custom-paginator.module';
import { CharactersSectionRoutingModule } from './characters-section-routing.module';
import { CharactersSectionComponent } from './characters-section.component';
import { CharactersSectionContainer } from './characters-section.container';
import { CharacterCompareModalModule } from 'src/app/shared/components/character-compare-modal/character-compare-modal.module';
import { CharacterCompareBarModule } from 'src/app/shared/components/character-compare-bar/character-compare-bar.module';

@NgModule({
  declarations: [CharactersSectionContainer, CharactersSectionComponent],
  imports: [
    CommonModule,
    CharactersSectionRoutingModule,
    CharacterCardModule,
    CustomPaginatorModule,
    CharacterCompareModalModule,
    CharacterCompareBarModule,
  ],
  exports: [CharactersSectionContainer],
})
export class CharactersSectionModule {}
