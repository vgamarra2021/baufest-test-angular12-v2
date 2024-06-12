import { Injectable } from '@angular/core';
import { CharactersService } from '../characters/characters.service';
import { EpisodesService } from '../episodes/episodes.service';
import { LocationsService } from '../locations/locations.service';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(
    private charactersService: CharactersService,
    private episodesService: EpisodesService,
    private locationService: LocationsService
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
      case '/locations':
        this.locationService.onChangeSearchValue(searchValue);
        break;
      default:
        break;
    }
  }
}
