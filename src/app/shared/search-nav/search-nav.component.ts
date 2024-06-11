import { Component } from '@angular/core';
import { searchNavConstant } from '../../features/common/contants/search-nav.constant';

@Component({
  selector: 'app-search-nav',
  templateUrl: './search-nav.component.html',
  styles: [],
})
export class SearchNavComponent {
  options: { title: string; value: string }[];
  constructor() {
    this.options = searchNavConstant;
  }
}
