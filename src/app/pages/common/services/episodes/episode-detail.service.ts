import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ICharacter } from '../../interfaces/characters';
import { IEpisode } from '../../interfaces/episodes/episode.interface';

@Injectable({
  providedIn: 'root',
})
export class EpisodeDetailService {
  constructor() {}

  modal$ = new Subject<{ characters: ICharacter[]; episode: IEpisode }>();
}
