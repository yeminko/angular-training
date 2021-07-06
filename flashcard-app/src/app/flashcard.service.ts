import { EventEmitter, Injectable } from '@angular/core';
import { Set } from './set.model';

@Injectable({
  providedIn: 'root',
})
export class FlashcardService {
  sets: Set[] = [];
  isCardView: boolean = false;
  currentIndex: number = -1; /** Set's index */
  watchCurrentIndex = new EventEmitter<number>();
  watchIsCardView = new EventEmitter<boolean>();
  resetCardView = new EventEmitter<void>();

  deleteMode: boolean = false;
  watchDeleteMode = new EventEmitter<boolean>();

  setCurrentIndex(index: number) {
    this.currentIndex = index;
    this.watchCurrentIndex.emit(this.currentIndex);
  }

  setCardView(value: boolean) {
    this.isCardView = value;
    this.watchIsCardView.emit(this.isCardView);
  }

  toggleDeleteMode() {
    this.deleteMode = !this.deleteMode;
    this.watchDeleteMode.emit(this.deleteMode);
  }

  deleteFlashcard(index: number) {
    this.sets[this.currentIndex].flashcards.splice(index, 1);
    this.saveSets();
  }

  deleteSet(index: number) {
    this.sets.splice(index, 1);
    this.saveSets();
    this.setCurrentIndex(0);
    this.setCardView(false);
    this.resetCardView.emit();
  }

  loadSets() {
    this.sets = JSON.parse(localStorage.getItem('sets') ?? '[]');
  }

  saveSets() {
    localStorage.setItem('sets', JSON.stringify(this.sets));
  }
}
