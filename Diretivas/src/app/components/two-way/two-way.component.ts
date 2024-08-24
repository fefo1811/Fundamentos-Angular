import { Component } from '@angular/core';

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
}
