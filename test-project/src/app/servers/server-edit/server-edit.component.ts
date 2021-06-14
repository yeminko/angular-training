import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Server } from '../server.service';

@Component({
  selector: 'app-server-edit',
  templateUrl: './server-edit.component.html',
  styleUrls: ['./server-edit.component.scss'],
})
export class ServerEditComponent implements OnInit {
  server: Server = { id: -1, name: '', status: 'offline' };
  allowEdit = false;

  constructor(private route: ActivatedRoute) {}

  onUpdate() {}

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      this.allowEdit = params['allowEdit'] === '1';
      console.log(this.allowEdit);
    });
    this.route.fragment.subscribe((value) => console.log(value));
  }
}
