import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputText: string = "Texto passado via Binding";
  inputType: string = "text";
  isDisabled: boolean = false;

  public mudarTipoInput() {
    this.isDisabled = !this.isDisabled;
  }
}
