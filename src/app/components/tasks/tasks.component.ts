import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

import { User } from '../../utils/model/user.model';
import { TasksService } from './../../services/tasks.service';
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

  constructor(
    private tasksService: TasksService,
  ) { }

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.user.id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }
}
