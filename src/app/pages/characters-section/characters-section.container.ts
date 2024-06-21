import { Component, OnDestroy, OnInit } from '@angular/core';
import { EMPTY, Subject } from 'rxjs';
import { catchError, takeUntil, tap } from 'rxjs/operators';
import { ICharacterResponse } from '../common/interfaces/characters/character-response.interface';
import { ICharacter } from '../common/interfaces/characters/character.interface';
import { CharactersService } from '../common/services/characters/characters.service';
import { SearchService } from '../common/services/search/search.service';
import { CharacterCompareService } from '../common/services/characters/character-compare.service';

@Component({
  selector: 'app-characters-section-container',
  templateUrl: './characters-section.container.html',
  styles: [],
})
export class CharactersSectionContainer implements OnInit, OnDestroy {
  characters: ICharacter[] = [];
  total: number = 0;
  page: number = 1;
  pageSize: number = 20;
  compareCharacterBarVisible: boolean = false;
  protected unsubscribe$ = new Subject<void>();

  constructor(
    private charactersService: CharactersService,
    private searchService: SearchService,
    private characterCompareService: CharacterCompareService
  ) {}

  ngOnInit(): void {
    this.updateCards();
    this.charactersService.subject$
      .pipe(
        tap(() => {
          this.updateCards();
        }),
        takeUntil(this.unsubscribe$)
      )
      .subscribe();

    this.characterCompareService.compareList$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((characters) => {
        characters.length === 0
          ? (this.compareCharacterBarVisible = false)
          : (this.compareCharacterBarVisible = true);
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onCompareClick(character: ICharacter) {
    this.characterCompareService.selectCharacter(character);
  }

  onPageChange(page: number) {
    this.page = page;
    this.updateCards();
  }

  updateCards() {
    const searchValue = this.searchService.searchTextValue;
    this.charactersService
      .getCharactersWithEpisodies(searchValue, this.page)
      .pipe(
        catchError(() => {
          this.total = 0;
          this.characters = [];
          return EMPTY;
        }),
        tap((res: ICharacterResponse | undefined) => {
          this.total = res?.info?.count || 0;
          this.characters = (res?.results as ICharacter[]) || [];
        })
      )
      .subscribe();
  }
}
