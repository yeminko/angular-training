import { Flashcard } from './flashcard.model';

export class Set {
  constructor(
    public name: string,
    public description: string,
    public flashcards: Flashcard[]
  ) {}
}
