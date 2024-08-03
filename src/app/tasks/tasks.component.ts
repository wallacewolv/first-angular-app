import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  standalone: true
})
export class TasksComponent implements OnInit {
  @Input({ required: true }) name!: string;

  constructor() { }

  ngOnInit() {
  }

}
