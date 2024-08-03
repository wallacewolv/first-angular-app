import { Component, computed, signal } from '@angular/core';
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
  selectedUser = signal(DUMMY_USERS.USERS[randomIndex]);
  imagePath = computed(() => `assets/users/${this.selectedUser().avatar}`);

  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.USERS.length);
    this.selectedUser.set(DUMMY_USERS.USERS[randomIndex])
  }
}
