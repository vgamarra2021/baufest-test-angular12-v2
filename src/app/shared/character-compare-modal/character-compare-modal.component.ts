import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICharacter } from 'src/app/features/common/interfaces/characters';

@Component({
  selector: 'app-character-compare-modal-ui',
  templateUrl: './character-compare-modal.component.html',
  styles: [],
})
export class CharacterCompareModalComponent {
  @Input() characters!: ICharacter[];
  @Output() onCloseClick = new EventEmitter<void>();

  countCommonEpisodies(selectedCharacter: ICharacter) {
    const othersCharacters = this.characters.filter(
      (character) => character.id !== selectedCharacter.id
    );
    return othersCharacters.map((character) => {
      const commonEpisodes = character.episode.filter(
        (episode) => selectedCharacter.episode.indexOf(episode) !== -1
      );
      return {
        name: character.name,
        count: commonEpisodes.length,
      };
    });
  }
}
