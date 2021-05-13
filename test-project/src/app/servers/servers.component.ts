import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
  providers: [LoggingService],
})
export class ServersComponent implements OnInit {
  logs: Array<string> = [];

  constructor(private loggingService: LoggingService) {}

  addLog(inputBox: HTMLInputElement) {
    this.loggingService.addLog(inputBox.value);
    inputBox.value = '';
  }

  ngOnInit() {
    this.logs = this.loggingService.logs;
  }
}
