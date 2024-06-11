import { Injectable } from '@angular/core';
import { CharactersService } from '../characters/characters.service';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private charactersService: CharactersService) {}

  searchTextValue: string = '';

  onChangeSearchText(searchValue: string, route: string) {
    console.log(`Search Value: ${searchValue}`);
    this.searchTextValue = searchValue;
    switch (route) {
      case '/characters':
        this.charactersService.onChangeSearchValue(searchValue);
        break;
      default:
        break;
    }
  }
}
