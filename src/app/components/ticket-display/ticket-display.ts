import { Component, Input } from '@angular/core';
import { Ticket } from '../../models/ticket.model';

@Component({
  selector: 'app-ticket-display',
  standalone: false,
  templateUrl: './ticket-display.html',
  styleUrl: './ticket-display.css'
})
export class TicketDisplay {
  @Input() ticket: Ticket | null = null;
}
