import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-section-ui',
  templateUrl: './search-section.component.html',
  styles: [],
})
export class SearchSectionComponent {
  @Output() onChangeInput = new EventEmitter<string>();
}
