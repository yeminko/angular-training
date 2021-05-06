import { Component, OnInit } from '@angular/core';
import { Note } from './note';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  notes: Note[] = [];
  showDetail = false;
  currentNote: Note = new Note(-1, '', '', '');

  onNewNote() {
    this.showDetail = true;
    this.currentNote = new Note(-1, '', '', '');
  }

  onShowDetail(note: Note) {
    this.showDetail = true;
    this.currentNote = { ...note };
  }

  onNoteDeleted(id: number) {
    this.showDetail = false;
    this.notes = this.notes.filter((note) => note.id !== id);
    this.saveToLocal();
  }

  onNoteAdded(note: Note) {
    this.showDetail = false;

    if (!note) return;

    if (this.currentNote.id === -1) {
      this.addNote(note);
    } else {
      this.editNote(note);
    }
  }

  addNote(note: Note) {
    note = { ...note, id: this.notes.length + 1 };
    this.notes.push(note);
    this.saveToLocal();
  }

  editNote(note: Note) {
    this.notes = this.notes.map((noteItem) => {
      return noteItem.id === note.id ? note : noteItem;
    });
    this.saveToLocal();
  }

  saveToLocal() {
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }

  ngOnInit() {
    this.notes = JSON.parse(localStorage.getItem('notes') || '[]');
  }
}
