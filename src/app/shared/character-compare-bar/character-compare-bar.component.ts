import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICharacter } from 'src/app/features/common/interfaces/characters';

@Component({
  selector: 'app-character-compare-bar-ui',
  templateUrl: './character-compare-bar.component.html',
  styles: [],
})
export class CharacterCompareBarComponent {
  @Input() visible!: boolean;
  @Input() characters!: ICharacter[];
  @Output() onShowComparison = new EventEmitter<void>();
}
