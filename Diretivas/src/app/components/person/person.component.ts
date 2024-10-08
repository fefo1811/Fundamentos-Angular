import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
  @Input( { required: true } ) name: string = '';
  @Input( { required: true } ) age: number = 0;
  @Input( { required: true } ) index: number = 0;
  @Input( { required: true } ) isFirst: boolean = false;
  @Input( { required: true } ) isLast: boolean = false;
  @Input( { required: true } ) isOdd: boolean = false;
  @Input( { required: true } ) isSelected: boolean = false;

  @Output() onPersonSelectEmitt = new EventEmitter<number>();
  selectPerson() {
    this.onPersonSelectEmitt.emit(this.index);
  }
} 
