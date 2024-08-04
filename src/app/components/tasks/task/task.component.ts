import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Task } from './../../../utils/model/task.model';
import { CardComponent } from "../../../shared/card/card.component";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() task!: Task;
  @Output() complete = new EventEmitter();

  onCompleteTask() {
    this.complete.emit(this.task.id);
  }
}
