import { Component, Input } from '@angular/core';

import { UserType } from '../utils/model/user';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;

  get imagePath() {
    return `assets/users/${this.avatar}`;
  }

  onSelectUser() { }
}
