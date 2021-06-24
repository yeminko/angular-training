import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';
import { Server, ServerService } from '../server.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss'],
})
export class ServerComponent implements OnInit {
  @Input() server: Server = {
    id: -1,
    name: '',
    status: '',
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private serverService: ServerService
  ) {}

  onEdit() {
    this.router.navigate(['edit'], {
      relativeTo: this.route,
      queryParamsHandling: 'preserve',
    });
  }

  ngOnInit() {
    // this.route.params.subscribe((params: Params) => {
    //   this.server = this.serverService.getServer(+params['id']);
    // });

    this.route.data.subscribe((data: Data) => {
      this.server = data['server'];
    });
  }
}
