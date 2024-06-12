import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ICharacter } from '../../interfaces/characters';

@Injectable({
  providedIn: 'root',
})
export class CharacterCompareService {
  compareList: ICharacter[] = [];
  compareList$ = new BehaviorSubject(this.compareList);
  modal$ = new Subject<ICharacter[]>();
  private currentIndex = 0;

  selectCharacter(character: ICharacter) {
    if (this.characterIsPresent(character!.id)) return;
    if (this.compareList.length < 3) {
      this.compareList.push(character);
    } else {
      this.compareList[this.currentIndex] = character;
      this.currentIndex = (this.currentIndex + 1) % 3;
    }
    this.compareList$.next(this.compareList);
  }

  characterIsPresent(characterId: number) {
    return !!this.compareList.find((item) => item.id === characterId);
  }

  showModal() {
    this.modal$.next(this.compareList);
  }
}
