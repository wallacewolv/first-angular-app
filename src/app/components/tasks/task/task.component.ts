import { CommonModule, DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

import { CardComponent } from '../../../shared/card/card.component';
import { TasksService } from './../../../services/tasks.service';
import { Task } from './../../../utils/model/task.model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() task!: Task;

  constructor(
    private tasksService: TasksService,
  ) { }

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
