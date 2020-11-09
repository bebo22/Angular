import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() oddNumber = new EventEmitter<{ number: number }>();
  @Output() evenNumber = new EventEmitter<{ number: number }>();
  interval: number;
  count = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  onGameStart() {
    this.interval = setInterval(() => {
      this.count++;
      if (this.count % 2 === 0) {
        this.oddNumber.emit(this.count);
      } else {
        this.evenNumber.emit(this.count);
      }
    }, 1000);
  }

  onGameStop() {
    clearInterval(this.interval);
  }

}
