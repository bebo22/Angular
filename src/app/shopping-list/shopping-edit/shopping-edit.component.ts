import {Component, EventEmitter, OnInit, ViewChild, Output, ElementRef} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() elementAdded = new EventEmitter<Ingredient>();
  @Output() elementDeleted = new EventEmitter<void>();
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  ingredient: Ingredient;

  constructor() {
  }

  ngOnInit() {
  }

  onAdd() {
    this.ingredient = new Ingredient(
      this.nameInput.nativeElement.value,
      this.amountInput.nativeElement.value
    );
    this.elementAdded.emit(this.ingredient);
  }

  onDelete() {
    this.elementDeleted.emit();
  }

  onClear() {
    this.nameInput.nativeElement.value = '';
    this.amountInput.nativeElement.value = '';
  }
}
