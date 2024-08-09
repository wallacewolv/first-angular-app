import { Injectable } from '@angular/core';

import { TASKS_DUMMY } from '../utils/dummy/tasks.dummy';
import { NewTaskData } from '../utils/model/new-task-data.model';
import { Task, TaskViewModel } from '../utils/model/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasks!: Array<Task>;

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string): Array<Task> {
    return this.tasks.filter(task => task.userId === userId)
  }

  addTask(taskData: NewTaskData, userId: string) {
    const newTaskData = new TaskViewModel({
      id: new Date().getTime().toString(),
      userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });

    this.tasks.unshift(newTaskData);
    this.saveTasks();
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
