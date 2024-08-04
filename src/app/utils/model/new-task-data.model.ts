export class NewTaskDataViewModel implements NewTaskData {
  title!: string;
  summary!: string;
  date!: string;

  constructor(entered: NewTaskData) {
    Object.assign(this, entered);
  }
}

export interface NewTaskData {
  title: string;
  summary: string;
  date: string;
}
