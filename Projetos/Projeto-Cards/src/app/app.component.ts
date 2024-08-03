import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  textoBotao1: string = "Felipe";
  textoBotao2: string = "Fefo";

  buttonEmitterCatcher(msg: string): void {
    console.log(`${msg} <----  Veio do ButtonComponent`);
  }
}
