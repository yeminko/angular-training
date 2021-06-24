import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Server, ServerService } from '../server.service';
import { CanComponentDeactivate } from './can-deactivate-guard.service';

@Component({
  selector: 'app-server-edit',
  templateUrl: './server-edit.component.html',
  styleUrls: ['./server-edit.component.scss'],
})
export class ServerEditComponent implements OnInit, CanComponentDeactivate {
  server: Server = { id: -1, name: '', status: 'offline' };
  allowEdit = false;
  changesSaved = false;

  constructor(
    private route: ActivatedRoute,
    private serverService: ServerService,
    private router: Router
  ) {}

  onUpdate() {
    this.serverService.updateServer(this.server);
    this.changesSaved = true;
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.allowEdit) return true;
    return this.changesSaved
      ? true
      : confirm('Do you want to discard the changes?');
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.server = this.serverService.getServer(+params['id']);
    });

    this.route.queryParams.subscribe((params: Params) => {
      this.allowEdit = params['allowEdit'] === '1';
      console.log(this.allowEdit);
    });
    this.route.fragment.subscribe((value) => console.log(value));
  }
}
