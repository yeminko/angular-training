import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Server, ServerService } from './server.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss'],
})
export class ServersComponent implements OnInit {
  servers: Server[] = [];
  constructor(
    private serverService: ServerService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  onReload() {
    this.router.navigate(['/servers'], { relativeTo: this.route });
  }

  ngOnInit() {
    this.servers = this.serverService.servers;
  }
}
