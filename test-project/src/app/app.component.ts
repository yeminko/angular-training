import { Component, OnInit } from '@angular/core';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LoggingService],
})
export class AppComponent implements OnInit {
  logs: Array<string> = [];
  constructor(private loggingService: LoggingService) {}

  ngOnInit() {
    this.loggingService.printLog('This is log');
    this.logs = this.loggingService.logs;
  }
}
