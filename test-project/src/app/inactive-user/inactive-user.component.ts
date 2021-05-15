import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-inactive-user',
  templateUrl: './inactive-user.component.html',
  styleUrls: ['./inactive-user.component.scss'],
})
export class InactiveUserComponent implements OnInit {
  inactives: string[] = [];
  constructor(private userService: UserService) {}

  onToactive(index: number) {
    this.userService.inactiveToActive(index);
  }

  ngOnInit(): void {
    this.inactives = this.userService.inactiveUsers;
  }
}
