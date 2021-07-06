import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Flashcard } from './flashcard.model';
import { FlashcardService } from './flashcard.service';
import { Set } from './set.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  cardViewSub: Subscription = new Subscription();
  indexSub: Subscription = new Subscription();

  currentFlashcards: Flashcard[] = [];
  sets: Set[] = [];

  isCardView: boolean = false;
  deleteMode: boolean = false;
  currentIndex: number = -1;

  constructor(private flashcardService: FlashcardService) {}

  onAddSet() {
    this.sets.unshift(new Set('', '', []));
    /**
     * To emit added obj's index (unshift added in index 0)
     */
    this.flashcardService.setCurrentIndex(0);
    this.flashcardService.saveSets();
  }

  onAddFlashcard() {
    this.currentFlashcards.push(new Flashcard('', ''));
    this.sets[this.currentIndex].flashcards = this.currentFlashcards;
    this.flashcardService.saveSets();
  }

  watchSetIndex() {
    this.currentIndex = this.flashcardService.currentIndex;
    this.indexSub = this.flashcardService.watchCurrentIndex.subscribe(
      (index: number) => {
        this.currentIndex = index;
        if (this.sets.length > 0) {
          this.currentFlashcards = this.sets[index].flashcards;
        } else {
          this.currentFlashcards = [];
        }
      }
    );
  }

  watchCardView() {
    this.cardViewSub = this.flashcardService.watchIsCardView.subscribe(
      (isCardView: boolean) => {
        this.isCardView = isCardView;
      }
    );
  }

  toggleDeleteMode() {
    this.deleteMode = !this.deleteMode;
    this.flashcardService.toggleDeleteMode();
  }

  initFlashcards() {
    if (this.sets.length > 0) {
      this.currentFlashcards = this.sets[this.currentIndex].flashcards ?? [];
    }
  }

  ngOnInit() {
    this.flashcardService.loadSets();
    this.sets = this.flashcardService.sets;
    this.flashcardService.setCurrentIndex(0);
    this.watchSetIndex();
    this.initFlashcards();
    this.watchCardView();
  }

  ngOnDestroy() {
    this.indexSub.unsubscribe();
    this.cardViewSub.unsubscribe();
  }
}
