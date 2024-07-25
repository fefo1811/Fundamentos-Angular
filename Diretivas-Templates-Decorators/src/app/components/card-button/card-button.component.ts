import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-card-button',
  templateUrl: './card-button.component.html',
  styleUrls: ['./card-button.component.scss']
})
export class CardButtonComponent {
  @Output() buttonClickEmitter = new EventEmitter<string>();

  onButtonClick() {
    console.log("Método do componente-filho disparado");

    this.buttonClickEmitter.emit("Felipe");
  }
}
