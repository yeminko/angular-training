import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  username = 'Unknown';
  constructor(private authService: AuthService) {}

  onSignOut() {
    this.authService.logout();
  }

  ngOnInit(): void {
    this.username = this.authService.user.username;
  }
}
