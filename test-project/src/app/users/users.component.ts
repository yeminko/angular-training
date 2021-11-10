import { Component, OnInit } from '@angular/core';
import { User, UserService } from './user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  constructor(private userService: UserService) {}

  activate() {
    this.userService.doActivate();
  }

  ngOnInit() {
    this.users = this.userService.users;
  }
}
