import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { UrlUtil } from 'src/app/shared/utils/url.util';
import { environment } from 'src/environments/environment';
import { BaseService } from '../../common/services/base.service';
import { IEpisode } from '../../episodes/interfaces/episode.interface';
import { EpisodesService } from '../../episodes/services/episodes.service';
import { ICharacterResponse } from '../interfaces/character-response.interface';
import { ICharacter } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root',
})
export class CharactersService extends BaseService {
  baseUrl: string = environment.charactersUrl;

  constructor(
    protected http: HttpClient,
    private episodesService: EpisodesService
  ) {
    super(http);
  }

  getCharactersWithEpisodies(name: string, page: number) {
    return this.getItemsByNameAndPage<ICharacterResponse>(name, page).pipe(
      map((response) => this.addEpisodeIds(response)),
      switchMap((response) => this.fetchEpisodes(response)),
      map(({ episodes, response }) => this.addEpisodeNames(episodes, response))
    );
  }

  private addEpisodeIds(response: ICharacterResponse) {
    response.results = (response.results as ICharacter[]).map((character) => {
      character.episodeId = this.getRandomEpisodeId(character);
      return character;
    });
    return response;
  }

  private fetchEpisodes(response: ICharacterResponse) {
    const episodesId = (response.results as ICharacter[]).map(
      (character) => character.episodeId!
    );
    const episodes$ =
      this.episodesService.getMultiplesItemsByIds<IEpisode[]>(episodesId);
    return forkJoin({
      episodes: episodes$,
      response: of(response),
    });
  }

  private addEpisodeNames(episodes: IEpisode[], response: ICharacterResponse) {
    response.results = (response.results as ICharacter[]).map((character) => {
      character.episodeName = episodes.find(
        (episode) => episode.id === character.episodeId!
      )?.name;
      return character;
    });
    return response;
  }

  getRandomEpisodeId(character: ICharacter): number {
    const randomIndex = Math.floor(Math.random() * character.episode.length);
    const episodeUrl = character.episode[randomIndex];
    return Number(UrlUtil.getIdFromUrl(episodeUrl));
  }
}
