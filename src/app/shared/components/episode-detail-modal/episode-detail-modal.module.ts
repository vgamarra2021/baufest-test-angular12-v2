import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryButtonModule } from '../primary-button/primary-button.module';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { EpisodeDetailModalContainer } from './episode-detail-modal.container';
import { EpisodeDetailModalComponent } from './episode-detail-modal.component';

@NgModule({
  declarations: [EpisodeDetailModalComponent, EpisodeDetailModalContainer],
  imports: [CommonModule, PrimaryButtonModule, NgbModalModule],
  exports: [EpisodeDetailModalContainer],
})
export class EpisodeDetailModalModule {}
