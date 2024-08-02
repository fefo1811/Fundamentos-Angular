import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cardPlanType: string = "Simples";
  cardPlanPrice: number = 100;

  handlePlanType(texto: string) {
    this.cardPlanType = texto;
  }
}
