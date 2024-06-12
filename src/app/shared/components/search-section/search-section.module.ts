import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SearchInputModule } from 'src/app/shared/components/search-input/search-input.module';
import { SearchNavButtonModule } from 'src/app/shared/components/search-nav-button/search-nav-button.module';
import { SearchNavModule } from 'src/app/shared/components/search-nav/search-nav.module';
import { SearchSectionComponent } from './search-section.component';
import { SearchSectionContainer } from './search-section.container';

@NgModule({
  declarations: [SearchSectionContainer, SearchSectionComponent],
  imports: [
    CommonModule,
    SearchNavButtonModule,
    SearchInputModule,
    SearchNavModule,
  ],
  exports: [SearchSectionContainer],
})
export class SearchSectionModule {}
