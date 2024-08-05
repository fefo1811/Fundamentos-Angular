import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  textoBotao1: string = "Felipe";
  textoBotao2: string = "Fefo";

  onCardButtonClicked() {
    console.log("Simulando fluxo de uma chamada HTTP")
    /**
     * 1. Um evento foi emitido do ButtonComponent
     * 2. Foi enviado para o CardComponent que emitiu um evento void para o AppComponent
     * 3. No AppComponent o Emitter é recebido e é onde é realizada a chamada HTTP
     */
  }
}
