import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterCompareModalComponent } from './character-compare-modal.component';
import { CharacterCompareModalContainer } from './character-compare-modal.container';
import { PrimaryButtonModule } from '../primary-button/primary-button.module';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    CharacterCompareModalComponent,
    CharacterCompareModalContainer,
  ],
  imports: [CommonModule, PrimaryButtonModule, NgbModalModule],
  exports: [CharacterCompareModalContainer],
})
export class CharacterCompareModalModule {}
