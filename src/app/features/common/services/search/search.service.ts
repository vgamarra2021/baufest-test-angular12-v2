import { Injectable } from '@angular/core';
import { CharactersService } from '../characters/characters.service';
import { EpisodesService } from '../episodes/episodes.service';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(
    private charactersService: CharactersService,
    private episodesService: EpisodesService
  ) {}

  searchTextValue: string = '';

  onChangeSearchText(searchValue: string, route: string) {
    console.log(`Search Value: ${searchValue}`);
    this.searchTextValue = searchValue;
    switch (route) {
      case '/characters':
        this.charactersService.onChangeSearchValue(searchValue);
        break;
      case '/episodes':
        this.episodesService.onChangeSearchValue(searchValue);
        break;
      default:
        break;
    }
  }
}
