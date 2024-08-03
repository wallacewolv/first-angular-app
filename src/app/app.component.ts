import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './utils/dummy/dummy-users';
import { UserType } from './utils/model/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, HeaderComponent, UserComponent],
  standalone: true
})
export class AppComponent {
  users: Array<UserType> = DUMMY_USERS.USERS;
}
