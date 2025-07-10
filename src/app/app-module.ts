import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { App } from './app';
import { TicketForm } from './components/ticket-form/ticket-form';
import { TicketDisplay } from './components/ticket-display/ticket-display';

@NgModule({
  declarations: [
    App,
    TicketForm,
    TicketDisplay
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
