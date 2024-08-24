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

  selectPerson(i: number) {
    console.log(i)
    this.personSelectedIndex = i;
  }
}
