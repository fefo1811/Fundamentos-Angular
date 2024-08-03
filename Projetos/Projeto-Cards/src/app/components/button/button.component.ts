import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input( { required: true } ) textoBotao: string = "";
  @Input( { required: true } ) buttonBgColor: 'white' | 'purple' = 'white';
  @Input() isDisabled: boolean = false;
  msg: string = "Emissão do evento deu certo!!!";

  @Output() buttonEmitter = new EventEmitter<string>();
  botaoClicado(): void {
    this.buttonEmitter.emit(this.msg);
  }
}
