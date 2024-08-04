import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NewTaskData, NewTaskDataViewModel } from './../../../utils/model/new-task-data.model';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;

  @Output() close = new EventEmitter<void>();

  entered = new NewTaskDataViewModel({
    title: '',
    summary: '',
    date: '',
  });

  constructor(
    private tasksService: TasksService,
  ) { }

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask(this.entered, this.userId);
    this.close.emit();
  }
}
