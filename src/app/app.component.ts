import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { TasksComponent } from './tasks/tasks.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './utils/dummy/dummy-users';
import { User } from './utils/model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HeaderComponent, UserComponent, TasksComponent, NgFor, NgIf],
  standalone: true
})
export class AppComponent {
  users: Array<User> = DUMMY_USERS.USERS;
  selectedUserId!: string;

  get selectedUser() {
    return this.users.find((user => user.id === this.selectedUserId));
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
