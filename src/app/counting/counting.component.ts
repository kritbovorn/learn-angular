import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counting',
  templateUrl: './counting.component.html',
  styleUrls: ['./counting.component.css']
})
export class CountingComponent implements OnInit {

  countNum: number = 0;

  items = [1, 2, 3, 4, 5];

  constructor() { }

  countTwice() {
    this.countNum += 2;
  }

  ngOnInit(): void {
  }

}
