import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SearchNavButtonModule } from '../search-nav-button/search-nav-button.module';
import { SearchNavComponent } from './search-nav.component';

@NgModule({
  declarations: [SearchNavComponent],
  imports: [CommonModule, SearchNavButtonModule],
  exports: [SearchNavComponent],
})
export class SearchNavModule {}
