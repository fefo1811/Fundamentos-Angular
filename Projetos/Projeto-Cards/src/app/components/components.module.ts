import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [ // Onde estarão os componentes relacionados a esse módulo
    ButtonComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ // É necessário declarar quais os componentes serão exportados para outro Module.
    ButtonComponent,
    CardComponent
  ]
})
export class ComponentsModule { }
