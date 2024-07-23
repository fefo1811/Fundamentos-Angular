import { Component } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css']
})
export class BindingsComponent {
  inputText: string = "Texto passado via Binding";
  inputType: string = "text";
  isDisabled: boolean = false;

  public mudarTipoInput() {
    this.isDisabled = !this.isDisabled;
  }

  public handleInputKeyup(event: KeyboardEvent) {
    const textoAtual = (event.target as HTMLInputElement).value; // O target é variável. Ele pode indicar que há uma propriedade value ou não. Portanto deverá ser feito o Casting com HTMLInputElement
    console.log(textoAtual);
  }
}
