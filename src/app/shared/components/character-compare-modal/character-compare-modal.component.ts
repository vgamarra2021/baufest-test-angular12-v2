import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICharacter } from 'src/app/pages/common/interfaces/characters';

@Component({
  selector: 'app-character-compare-modal-ui',
  templateUrl: './character-compare-modal.component.html',
  styles: [],
})
export class CharacterCompareModalComponent {
  @Input() characters!: ICharacter[];
  @Output() onCloseClick = new EventEmitter<void>();
}
