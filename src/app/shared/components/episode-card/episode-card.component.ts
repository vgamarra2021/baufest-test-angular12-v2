import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IEpisode } from 'src/app/pages/common/interfaces/episodes/episode.interface';

@Component({
  selector: 'app-episode-card',
  templateUrl: './episode-card.component.html',
  styles: [],
})
export class EpisodeCardComponent {
  @Input() episode!: IEpisode;
  @Output() onDetailClick = new EventEmitter<IEpisode>();
}
