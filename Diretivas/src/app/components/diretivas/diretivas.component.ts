import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.css']
})
export class DiretivasComponent {
  minhaProp: boolean = true;

  toggleProp(): void {
    this.minhaProp = !this.minhaProp
  }

  isTruthy() {
    return "";
  }


  // ngFor
  // listPessoas = ['Felipe', 'João', true, 1000]
  listPessoas = [
    { name: 'Felipe da Silva', age: 23 },
    { name: 'Fulano da Silva', age: 34 },
    { name: 'Valentin da Silva', age: 8 },
    { name: 'Lorenzo da Silva', age: 3 },
  ]

  personSelectedIndex: number | undefined;

  selectPerson(event: number) {
    console.log(event);
    this.personSelectedIndex = event;
  }

  // ngStyle
  fontSize: number = 15;
  textColor: 'black' | 'orange' = 'black';
  buttonText: 'Preto' | 'Laranja' = 'Laranja'

  aumentarFontSize() {
    this.fontSize += 5;
  }

  toggleFontColor() {
    if( this.textColor === 'black' ) {
      this.textColor = 'orange';
      this.buttonText = 'Preto';
    } else {
      this.textColor = 'black';
      this.buttonText = 'Laranja';
    }
  } 

  // ngClass
  isGreen: boolean = true;

  setToGreen(): void {
    this.isGreen = true;
  }

  setToOrange(): void {
    this.isGreen = false;
  }


  // Aula de Introdução à Pipes
  texto: string = 'felipe';
  pessoa = {
    nome: 'Felipe',
    idade: 23
  }

  algumaCoisa = [
    { nome: 'Felipe', idade: 23 },
    { nome: 'FE', idade: 23 },
    { nome: 'Li', idade: 23 },
    { nome: 'PE', idade: 23 }
  ]
}
