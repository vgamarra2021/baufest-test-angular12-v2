import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styles: [],
})
export class LocationCardComponent {
  @Input() name!: string;
  @Input() type!: string;
  @Input() dimension!: string;
  @Input() createdDate!: string;
  @Input() residentsNumber!: number;
}
