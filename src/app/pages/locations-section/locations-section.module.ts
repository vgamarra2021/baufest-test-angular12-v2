import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationsSectionComponent } from './locations-section.component';
import { LocationsSectionContainer } from './locations-section.container';
import { LocationsRoutingModule } from './episodes-section-routing.module';
import { CustomPaginatorModule } from 'src/app/shared/components/custom-paginator/custom-paginator.module';
import { LocationCardModule } from 'src/app/shared/components/location-card/location-card.module';

@NgModule({
  declarations: [LocationsSectionComponent, LocationsSectionContainer],
  imports: [
    CommonModule,
    LocationsRoutingModule,
    CustomPaginatorModule,
    LocationCardModule,
  ],
  exports: [LocationsSectionContainer],
})
export class LocationsSectionModule {}
