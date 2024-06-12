import {
  Component,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ICharacter } from 'src/app/pages/common/interfaces/characters';
import { CharacterCompareService } from 'src/app/pages/common/services/characters/character-compare.service';
import { CharacterCompareModalComponent } from './character-compare-modal.component';

@Component({
  selector: 'app-character-compare-modal-container',
  templateUrl: './character-compare-modal.container.html',
  styles: [],
})
export class CharacterCompareModalContainer implements OnInit, OnDestroy {
  @ViewChild('content')
  modalContent!: TemplateRef<CharacterCompareModalComponent>;
  characters: ICharacter[] = [];

  protected unsubscribe$ = new Subject<void>();

  constructor(
    private bootstrapModalService: NgbModal,
    private characterCompareService: CharacterCompareService
  ) {}

  ngOnInit(): void {
    this.characterCompareService.modal$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((res) => {
        this.characters = res.map((character) => {
          character.commonEpisodes = this.countCommonEpisodies(character, res);
          return character;
        });
        this.open();
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  countCommonEpisodies(
    selectedCharacter: ICharacter,
    totalCharacters: ICharacter[]
  ) {
    const othersCharacters = totalCharacters.filter(
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

  open() {
    this.bootstrapModalService.open(this.modalContent, {
      ariaLabelledBy: 'modal-basic-title',
      centered: true,
      animation: true,
      size: 'lg',
    });
  }
}
