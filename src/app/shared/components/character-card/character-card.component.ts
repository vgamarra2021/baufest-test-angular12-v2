import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICharacter } from 'src/app/pages/common/interfaces/characters';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styles: [
    `
      :host {
        min-width: 300px;
      }
    `,
  ],
})
export class CharacterCardComponent {
  @Input() character!: ICharacter;
  @Input() selectedEpisode: string = '';
  @Output() onCompareClick = new EventEmitter<ICharacter>();

  onClick() {
    this.onCompareClick.emit(this.character);
  }
}
