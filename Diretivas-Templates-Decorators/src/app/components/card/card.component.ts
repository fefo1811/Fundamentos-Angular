import {Component, Input, numberAttribute} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  // @Input() planType: string = '';
  // @Input({ required: true }) planPrice: number = 0;

//   Output
  buttonClicked(valorEmitidoDoFilho: string) {
    console.log("Método do componente-pai disparado")
    console.log(valorEmitidoDoFilho);
    console.log(this.planType); // Pegando o valor que está no método Get
  }


// @Input com Get e Set
//   private _planType: string = '';
//   @Input('planType') set planType(value: string) {
//     this._planType = value.toUpperCase();
//   };
//
//   get planType(): string {
//     return this._planType;
//   }

// Propriedade Transform
  @Input({ alias: 'planType', transform: (value: string) => value.toUpperCase() }) planType: string = '';
  @Input({ required: true, transform: numberAttribute }) planPrice: number = 0;
  // numberAttribute é um módulo que faz a conversão de uma string para um number
}
