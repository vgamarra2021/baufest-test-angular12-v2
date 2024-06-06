import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styles: [],
})
export class SearchContainerComponent {
  constructor(private router: Router, private searchService: SearchService) {}

  onChangeInput(searchValue: string) {
    this.searchService.onChangeSearchText(searchValue, this.router.url);
  }
}
