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
}
