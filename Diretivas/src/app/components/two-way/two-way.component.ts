import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent {
  name: string = 'Felipe';


  handleInputChange(event: string) {
    this.name = event;
  }




  // Treinando ngIf com ngTemplate
  isTexto: boolean = true;

  // showText() {
  //   this.isTexto = !this.isTexto;
  //   console.log(this.isTexto);
  // }



  // // Treinando @Input com Get e Set
  // private _variavelPrivada: string = '';

  // // Método SET
  // @Input() set variavelPrivada(value: string) {
  //   this._variavelPrivada = value;
  // }


  // // Método GET
  // get variavelPrivada(): string {
  //   return this._variavelPrivada;
  // }

  // // Treinando @output
  // @Output() emissor = new EventEmitter<string>();
  // emitir() {
  //   this.emissor.emit(this.variavelPrivada);
  // }

}
