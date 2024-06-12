import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterCompareBarComponent } from './character-compare-bar.component';
import { CharacterCompareBarContainer } from './character-compare-bar.container';

@NgModule({
  declarations: [CharacterCompareBarComponent, CharacterCompareBarContainer],
  imports: [CommonModule],
  exports: [CharacterCompareBarContainer],
})
export class CharacterCompareBarModule {}
