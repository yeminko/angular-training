import { Component } from '@angular/core';
import { CountService } from './count.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  activeToInactive = 0;
  inactiveToActive = 0;

  constructor(private countService: CountService) {}

  ngOnChanges() {
    this.activeToInactive = this.countService.activeToInactiveCount;
    this.inactiveToActive = this.countService.inactiveToActiveCount;
  }

  ngOnInit() {
    this.activeToInactive = this.countService.activeToInactiveCount;
    this.inactiveToActive = this.countService.inactiveToActiveCount;
  }
}
