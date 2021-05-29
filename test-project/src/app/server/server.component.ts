import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss'],
})
export class ServerComponent {
  @Input() count = 0;
  @Output() countChange = new EventEmitter<number>();

  increaseCount() {
    this.count++;
    this.countChange.emit(this.count);
  }
}
