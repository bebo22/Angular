import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  oddNumberArr: number[] = [];
  oddNumber: number;
  evenNumber: number;
  evenNumberArr: number[] = [];

  onOddNumber(oddNumber: number) {
    this.oddNumber = oddNumber;
    this.oddNumberArr.push(oddNumber);
  }

  onEvenNumber(evenNumber: number) {
    this.evenNumber = evenNumber;
    this.evenNumberArr.push(evenNumber);
  }
}
