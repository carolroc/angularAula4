import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css'],
})
export class NumbersComponent implements OnInit {
  counter = 0;
  constructor() {}

  ngOnInit() {}

  add() {
    this.counter++;
  }

  getRandomNumbers() {
    return [100 * Math.random(), 100 * Math.random()];
  }
}
