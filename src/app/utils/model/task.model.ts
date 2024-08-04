export class TaskViewModel implements Task {
  id!: string;
  userId!: string;
  title!: string;
  summary!: string;
  dueDate!: string;

  constructor(task: Task) {
    Object.assign(this, task);
  }
}
export interface Task {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}
