import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { AuthService } from '../auth.service';
import { PasswordService } from '../passwords/password.service';

@UntilDestroy()
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  username = 'Unknown';
  passwordSize: number = 0;
  constructor(
    private authService: AuthService,
    private passwordService: PasswordService
  ) {}

  onSignOut() {
    this.authService.logout();
  }

  ngOnInit(): void {
    this.username = this.authService.user.username;

    setTimeout(() => {
      this.passwordSize = this.passwordService.getPasswords().length;
      this.passwordService.passwordsChanged
        .pipe(untilDestroyed(this))
        .subscribe((passwords) => (this.passwordSize = passwords.length));
    });
  }
}
