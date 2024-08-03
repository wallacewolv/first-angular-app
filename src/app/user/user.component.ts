import { Component } from '@angular/core';
import { DUMMY_USERS } from '../utils/dummy/dummy-users';
import { CommonModule } from '@angular/common';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.USERS.length);
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  selectedUser = DUMMY_USERS.USERS[randomIndex];

  get imagePath() {
    return `assets/users/${this.selectedUser.avatar}`
  }
}
