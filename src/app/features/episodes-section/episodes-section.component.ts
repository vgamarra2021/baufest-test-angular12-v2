import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IEpisode } from '../common/interfaces/episodes/episode.interface';

@Component({
  selector: 'app-episodes-section-ui',
  templateUrl: './episodes-section.component.html',
  styles: [],
})
export class EpisodesSectionComponent {
  @Input() episodes!: IEpisode[];
  @Input() page!: number;
  @Input() pageSize!: number;
  @Input() total!: number;
  @Output() onDetailClick = new EventEmitter<IEpisode>();
  @Output() onPageChange = new EventEmitter<number>();
}
