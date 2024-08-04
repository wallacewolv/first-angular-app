import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

import { TASKS_DUMMY } from '../../utils/dummy/tasks.dummy';
import { User } from '../../utils/model/user.model';
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

  tasks = TASKS_DUMMY.TASKS;

  get selectedUserTasks() {
    return this.tasks.filter(task => task.userId === this.user.id);
  }
}
