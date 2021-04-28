import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
})
export class ServersComponent implements OnInit {
  showDetail = false;
  logs: Array<string> = [];

  addLogs() {
    this.logs.push('button is clicked');
  }
  ngOnInit(): void {}
}
