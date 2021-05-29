import { Component } from '@angular/core';
import { CountService } from './count.service';
import { Person } from './test';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  person: Person = { name: 'Mg Mg' };
}
