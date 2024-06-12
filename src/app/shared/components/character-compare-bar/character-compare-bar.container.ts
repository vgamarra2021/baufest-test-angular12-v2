import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ICharacter } from 'src/app/pages/common/interfaces/characters';
import { CharacterCompareService } from 'src/app/pages/common/services/characters/character-compare.service';

@Component({
  selector: 'app-character-compare-bar-container',
  templateUrl: './character-compare-bar.container.html',
  styles: [],
})
export class CharacterCompareBarContainer implements OnInit, OnDestroy {
  characters: ICharacter[] = [];
  visible: boolean = true;
  protected unsubscribe$ = new Subject<void>();

  constructor(private characterCompareService: CharacterCompareService) {}

  ngOnInit(): void {
    this.characterCompareService.compareList$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((characters) => {
        this.characters = characters;
        characters.length === 0
          ? (this.visible = false)
          : (this.visible = true);
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  showComparison() {
    if (this.characters.length > 1) this.characterCompareService.showModal();
  }
}
