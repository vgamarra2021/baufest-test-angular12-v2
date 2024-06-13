import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RickAndMortyRoutingModule } from './rick-and-morty-routing.module';
import { RickAndMortyComponent } from './rick-and-morty.component';
import { SearchSectionModule } from 'src/app/shared/components/search-section/search-section.module';

@NgModule({
  declarations: [RickAndMortyComponent],
  imports: [CommonModule, RickAndMortyRoutingModule, SearchSectionModule],
  exports: [RickAndMortyComponent],
})
export class RickAndMortyModule {}
