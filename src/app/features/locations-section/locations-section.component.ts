import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ILocation } from '../common/interfaces/locations/location.interface';

@Component({
  selector: 'app-locations-section-ui',
  templateUrl: './locations-section.component.html',
  styles: [],
})
export class LocationsSectionComponent {
  @Input() locations!: ILocation[];
  @Input() page!: number;
  @Input() pageSize!: number;
  @Input() total!: number;
  @Output() onPageChange = new EventEmitter<number>();
}
