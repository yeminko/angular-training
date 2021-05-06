import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Note } from '../note';

@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.scss'],
})
export class NoteDetailComponent {
  @Input() note: Note = new Note(-1, '', '', '');
  @Output() noteAdded = new EventEmitter<Note>();
  @Output() noteDeleted = new EventEmitter<number>();

  onSave() {
    if (
      this.note.header == '' &&
      this.note.title == '' &&
      this.note.note == ''
    ) {
      this.noteAdded.emit(undefined);
    } else {
      this.noteAdded.emit(this.note);
    }
  }

  onCancel() {
    this.noteAdded.emit(undefined);
  }

  onDelete() {
    this.noteDeleted.emit(this.note.id);
  }
}
