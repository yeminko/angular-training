import { Component, Input, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss'],
  providers: [LoggingService],
})
export class ServerComponent {
  @Input() log = '';
  @Input() index = -1;

  constructor(private loggingService: LoggingService) {}

  updateLog() {
    this.loggingService.updateLog(this.index, this.log + '(checked)');
  }
}
