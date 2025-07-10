import { Component } from '@angular/core';
import { Ticket } from './models/ticket.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  title = 'fishing-ticket-app';
  displayedTicket: Ticket | null = null;

  onTicketSubmitted(ticket: Ticket | null): void {
    console.log('AppComponent: Received ticket:', ticket);
    this.displayedTicket = ticket;
  }
}
