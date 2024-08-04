import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NewTaskData, NewTaskDataViewModel } from './../../../utils/model/new-task-data.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskData>();

  entered = new NewTaskDataViewModel({
    title: '',
    summary: '',
    date: '',
  });

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.add.emit(this.entered);
  }
}
