import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DiretivasComponent } from './components/diretivas/diretivas.component';
import { TwoWayComponent } from './components/two-way/two-way.component';
import { PersonComponent } from './components/person/person.component';

@NgModule({
  declarations: [
    AppComponent,
    DiretivasComponent,
    TwoWayComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
