import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchContainerComponent } from './components/search-container/search-container.component';
import { SearchNavComponent } from './components/search-nav/search-nav.component';
import { SearchNavButtonComponent } from './components/search-nav-button/search-nav-button.component';
import { RouterModule } from '@angular/router';
import { SearchInputComponent } from './components/search-input/search-input.component';

@NgModule({
  declarations: [
    SearchContainerComponent,
    SearchNavComponent,
    SearchNavButtonComponent,
    SearchInputComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [SearchContainerComponent],
})
export class SearchModule {}
