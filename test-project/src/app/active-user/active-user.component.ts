import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-active-user',
  templateUrl: './active-user.component.html',
  styleUrls: ['./active-user.component.scss'],
})
export class ActiveUserComponent implements OnInit {
  actives: string[] = [];
  constructor(private userService: UserService) {}

  onToInactive(index: number) {
    this.userService.activeToInactive(index);
  }

  ngOnInit(): void {
    this.actives = this.userService.activeUsers;
  }
}
