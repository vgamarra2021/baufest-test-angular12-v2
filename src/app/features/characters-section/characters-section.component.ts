import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICharacter } from '../common/interfaces/characters';

@Component({
  selector: 'app-characters-section-ui',
  templateUrl: './characters-section.component.html',
  styles: [],
})
export class CharactersSectionComponent {
  @Input() total!: number;
  @Input() page!: number;
  @Input() pageSize!: number;
  @Input() characters!: ICharacter[];
  @Output() onCompareClick = new EventEmitter<ICharacter>();
  @Output() onPageChange = new EventEmitter<number>();
}
