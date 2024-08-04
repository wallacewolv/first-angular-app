import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

import { HeaderComponent } from './components/header/header.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { UserComponent } from './components/user/user.component';
import { USERS_DUMMY } from './utils/dummy/users.dummy';
import { User } from './utils/model/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HeaderComponent, UserComponent, TasksComponent, NgFor, NgIf],
  standalone: true
})
export class AppComponent {
  users: Array<User> = USERS_DUMMY.USERS;
  selectedUserId!: string;

  get selectedUser() {
    return this.users.find((user => user.id === this.selectedUserId));
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
