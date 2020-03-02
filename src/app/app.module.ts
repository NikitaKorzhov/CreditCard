import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { KeyButtonComponent } from './components/key-button/key-button.component';
import { ControlPanelComponent } from './components/control-panel/control-panel.component';
import { KeyboardService } from './shared/keyboard/keyboard.service';
 

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    KeyButtonComponent,
    ControlPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TextMaskModule
  ],
  providers: [KeyboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
