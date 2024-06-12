import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchNavButtonComponent } from './search-nav-button.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SearchNavButtonComponent],
  imports: [CommonModule, RouterModule],
  exports: [SearchNavButtonComponent],
})
export class SearchNavButtonModule {}
