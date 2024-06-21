import { Component, OnDestroy, OnInit } from '@angular/core';
import { EMPTY, forkJoin, of, Subject } from 'rxjs';
import { catchError, switchMap, takeUntil, tap } from 'rxjs/operators';
import { UrlUtil } from 'src/app/shared/utils/url.util';
import { ICharacter } from '../common/interfaces/characters';
import { IEpisodeResponse } from '../common/interfaces/episodes/episode-response.interface';
import { IEpisode } from '../common/interfaces/episodes/episode.interface';
import { CharactersService } from '../common/services/characters/characters.service';
import { EpisodeDetailService } from '../common/services/episodes/episode-detail.service';
import { EpisodesService } from '../common/services/episodes/episodes.service';
import { SearchService } from '../common/services/search/search.service';

@Component({
  selector: 'app-episodes-section.container',
  templateUrl: './episodes-section.container.html',
  styles: [],
})
export class EpisodesSectionContainer implements OnInit, OnDestroy {
  episodes: IEpisode[] = [];
  total: number = 0;
  page: number = 1;
  pageSize: number = 20;
  protected unsubscribe$ = new Subject<void>();

  constructor(
    private episodesService: EpisodesService,
    private charactersService: CharactersService,
    private searchService: SearchService,
    private episodeDetailService: EpisodeDetailService
  ) {}

  ngOnInit(): void {
    this.updateCards();
    this.episodesService.subject$
      .pipe(
        tap(() => {
          this.updateCards();
        }),
        takeUntil(this.unsubscribe$)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onPageChange(page: number) {
    this.page = page;
    this.updateCards();
  }

  onDetailClick(episode: IEpisode) {
    console.log(episode);
    of(episode)
      .pipe(
        switchMap((episode) => {
          const characterIds = episode.characters.map((characterUrl) =>
            Number(UrlUtil.getIdFromUrl(characterUrl))
          );
          const characters$ =
            this.charactersService.getMultiplesItemsByIds<ICharacter[]>(
              characterIds
            );
          return forkJoin({
            episode: of(episode),
            characters: characters$,
          });
        })
      )
      .subscribe((response) => {
        this.episodeDetailService.modal$.next(response);
      });
  }

  updateCards() {
    const searchValue = this.searchService.searchTextValue;
    this.episodesService
      .getItemsByNameAndPage<IEpisodeResponse>(searchValue, this.page)
      .pipe(
        catchError(() => {
          this.total = 0;
          this.episodes = [];
          return EMPTY;
        }),
        tap((res: IEpisodeResponse | undefined) => {
          this.total = res?.info?.count || 0;
          this.episodes = (res?.results as IEpisode[]) || [];
        })
      )
      .subscribe();
  }
}
