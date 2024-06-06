import { Component, OnDestroy, OnInit } from '@angular/core';
import { EMPTY, Subject } from 'rxjs';
import { catchError, takeUntil, tap } from 'rxjs/operators';
import { SearchService } from '../../../search/services/search.service';
import { ICharacterResponse } from '../../interfaces/character-response.interface';
import { ICharacter } from '../../interfaces/character.interface';
import { CharactersService } from '../../services/characters.service';

@Component({
  selector: 'app-characters-container',
  templateUrl: './characters-container.component.html',
  styles: [],
})
export class CharactersContainerComponent implements OnInit, OnDestroy {
  characters: ICharacter[] = [];
  total: number = 0;
  page: number = 1;
  pageSize: number = 20;
  protected destroy$ = new Subject<void>();

  constructor(
    private charactersService: CharactersService,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.updateCards();
    this.charactersService.subject$
      .pipe(
        tap(() => {
          this.updateCards();
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onCompareClick(character: ICharacter) {
    console.log(`Compare click : ${character.name}`);
  }

  onPageChange(page: any) {
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
          this.total = res?.info.count || 0;
          this.characters = (res?.results as ICharacter[]) || [];
        })
      )
      .subscribe();
  }
}
