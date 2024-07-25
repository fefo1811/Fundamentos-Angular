import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CardsModule} from "./components/cards/cards.module";

import { AppComponent } from './app.component';
import { BindingsComponent } from './components/bindings/bindings.component';


@NgModule({
  declarations: [
    AppComponent,
    BindingsComponent
  ],
  imports: [
    BrowserModule,
    CardsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
