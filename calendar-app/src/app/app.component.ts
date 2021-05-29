import { Component, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { FlatpickrDefaultsInterface } from 'angularx-flatpickr/flatpickr-defaults.service';
import { isSameDay, isSameMonth, startOfDay } from 'date-fns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('modal') modal: any;
  modalRef: any;
  viewDate = new Date();
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  activeDayIsOpen: boolean = false;

  datePickerOptions: FlatpickrDefaultsInterface = {
    enable: [
      {
        from: new Date(0, 1),
        to: new Date(new Date().getFullYear() + 200, 12),
      },
    ],
  };

  event: CalendarEvent = {
    id: -1,
    start: startOfDay(new Date()),
    title: 'Untitled',
    color: {
      primary: '',
      secondary: '',
    },
  };

  events: CalendarEvent[] = [
    {
      id: 1,
      start: startOfDay(new Date()),
      title: 'Event 1',
      color: {
        primary: '#e66465',
        secondary: '#f6b73c',
      },
    },
    {
      id: 2,
      start: startOfDay(new Date()),
      title: 'Event 2 ',
      color: {
        primary: '#145c69',
        secondary: '#4fdaf3',
      },
    },
  ];

  constructor(private modalService: NgbModal) {}

  setView(view: CalendarView) {
    this.view = view;
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        if (!this.activeDayIsOpen) this.onNewEvent(date);
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  onEditEvent(event: CalendarEvent) {
    this.event = { ...event };
    this.openModal();
  }

  onNewEvent(date: Date) {
    this.event = {
      id: -1,
      start: date,
      end: date,
      title: 'Untitled',
      color: {
        primary: '#1e90ff',
        secondary: '#d1e8ff',
      },
    };
    this.openModal();
  }

  openModal() {
    this.modalRef = this.modalService.open(this.modal, { centered: true });
  }

  onSave() {
    if (this.event.id === -1) {
      this.event.id = this.events.length + 1;
      this.events = [...this.events, this.event];
    } else {
      this.events = this.events.map((event) => {
        if (event.id === this.event.id) {
          event = this.event;
        }
        return event;
      });
    }
    this.modalRef.close();
  }

  onDelete() {
    this.events = this.events.filter((event) => event.id !== this.event.id);
    this.modalRef.close();
  }
}
