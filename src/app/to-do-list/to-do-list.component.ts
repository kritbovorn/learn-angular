import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  tasks: string[] = [];
  

  @Input() task;
  

  addTask(data: string) {
    this.tasks.push(data);
  }

  constructor() { 
    this.task = "TASKS;"
  }

  ngOnInit(): void {
  }

}
