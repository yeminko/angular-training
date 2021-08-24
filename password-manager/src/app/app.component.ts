import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { AuthService } from './auth.service';

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  canAccess: boolean = true;
  constructor(private authService: AuthService) {}

  watchAccess() {
    this.canAccess = this.authService.canAccess;
    this.authService.accessChanged
      .pipe(untilDestroyed(this))
      .subscribe((canAccess) => (this.canAccess = canAccess));
  }

  ngOnInit() {
    this.watchAccess();
  }
}
