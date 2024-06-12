import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from 'src/app/pages/common/services/search/search.service';

@Component({
  selector: 'app-search-container',
  templateUrl: './search-section.container.html',
  styles: [],
})
export class SearchSectionContainer {
  constructor(private router: Router, private searchService: SearchService) {}

  onChangeInput(searchValue: string) {
    this.searchService.onChangeSearchText(searchValue, this.router.url);
  }
}
