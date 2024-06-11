import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styles: [],
})
export class SearchInputComponent {
  inputText = new FormControl('');
  @Output() onChange = new EventEmitter<string>();

  constructor() {
    this.inputText.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((searchValue: string) => {
        this.onChange.emit(searchValue);
      });
  }
}
