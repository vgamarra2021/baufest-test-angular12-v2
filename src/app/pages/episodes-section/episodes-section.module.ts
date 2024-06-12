import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EpisodesRoutingModule } from './episodes-section-routing.module';
import { EpisodesSectionComponent } from './episodes-section.component';
import { EpisodesSectionContainer } from './episodes-section.container';
import { CustomPaginatorModule } from 'src/app/shared/components/custom-paginator/custom-paginator.module';
import { EpisodeCardModule } from 'src/app/shared/components/episode-card/episode-card.module';
import { EpisodeDetailModalModule } from 'src/app/shared/components/episode-detail-modal/episode-detail-modal.module';

@NgModule({
  declarations: [EpisodesSectionComponent, EpisodesSectionContainer],
  imports: [
    CommonModule,
    EpisodesRoutingModule,
    CustomPaginatorModule,
    EpisodeCardModule,
    EpisodeDetailModalModule,
  ],
  exports: [EpisodesSectionContainer],
})
export class EpisodesSectionModule {}
