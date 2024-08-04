import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

import { DUMMY_TASKS } from '../../utils/dummy/dummy-tasks';
import { User } from '../../utils/model/user';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  standalone: true,
  imports: [TaskComponent, NgFor]
})
export class TasksComponent {
  @Input({ required: true }) user!: User;

  tasks = DUMMY_TASKS.TASKS;

  get selectedUserTasks() {
    return this.tasks.filter(task => task.userId === this.user.id);
  }
}
