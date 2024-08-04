import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

import { TASKS_DUMMY } from '../../utils/dummy/tasks.dummy';
import { User } from '../../utils/model/user.model';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  standalone: true,
  imports: [TaskComponent, NewTaskComponent, NgFor, NgIf]
})
export class TasksComponent {
  @Input({ required: true }) user!: User;

  isAddingTask = false;
  tasks = TASKS_DUMMY.TASKS;

  get selectedUserTasks() {
    return this.tasks.filter(task => task.userId === this.user.id);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }
}
