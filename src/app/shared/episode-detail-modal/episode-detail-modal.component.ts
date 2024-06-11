import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICharacter } from 'src/app/features/common/interfaces/characters';
import { IEpisode } from 'src/app/features/common/interfaces/episodes/episode.interface';

@Component({
  selector: 'app-episode-detail-modal-ui',
  templateUrl: './episode-detail-modal.component.html',
  styles: [],
})
export class EpisodeDetailModalComponent {
  @Input() episode!: IEpisode | null;
  @Input() characters!: ICharacter[];
  @Output() onCloseClick = new EventEmitter<void>();
}
