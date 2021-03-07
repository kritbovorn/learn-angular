import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  tasks = ["boy"];
  

  @Input() task: string = "";
  

  addTask() {
    this.tasks.push(this.task);
    this.task = "";
  }

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
