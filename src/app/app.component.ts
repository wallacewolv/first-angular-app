import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './utils/dummy/dummy-users';
import { User } from './utils/model/user';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, HeaderComponent, UserComponent, TasksComponent],
  standalone: true
})
export class AppComponent {
  users: Array<User> = DUMMY_USERS.USERS;
  selectedUserId = '';

  get selectedUser() {
    return this.users.find((user => user.id === this.selectedUserId));
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
