import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input()

  description: string = "";
  count: number = 0

  constructor() { 
    this.description = 'HomeComponent:  Angular pretty good'
  }

  countNumber() {
    this.count += 1;
  }

  ngOnInit(): void {
  }

}
