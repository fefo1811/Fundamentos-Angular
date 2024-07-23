import { Component } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css']
})
export class BindingsComponent {
  // Aula 1 e 2: Property Binding e Event Binding
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
// =============================================

  // Aula 3: Attribute Binding
  textoBotao: string = "Texto do Botão";
  buttonDisable: boolean = false;

  buttonClick() {
    this.textoBotao = "Título alterado";
    this.buttonDisable = !this.buttonDisable;
  }
// =============================================

  // Aula 4: CSS Binding
  widthButton1: string = '100px';
  widthButton2: string = '130';
  bgColorButton: string = 'aqua';
  switcher: boolean = false;

  stylesObj = {
    width: '160px',
    backgroundColor: 'yellow',
  }

  updateStylesObj() {
    this.stylesObj = {
      width: '200px',
      backgroundColor: 'purple',
    }
  }
}
