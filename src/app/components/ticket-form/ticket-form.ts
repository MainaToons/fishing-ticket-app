import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Ticket } from '../../models/ticket.model';
@Component({
  selector: 'app-ticket-form',
  standalone: false,
  templateUrl: './ticket-form.html',
  styleUrl: './ticket-form.css'
})
export class TicketForm implements OnInit {
  @Output() ticketSubmitted = new EventEmitter<Ticket| null>();

  fishingTicketForm!:FormGroup;

  ticketValidities = ['1 week', '1 month', '6 month', '1 year']
  ticketTypes = ['Standard', 'Kids', 'Pensioner'];
 

  ngOnInit():void{
    this.fishingTicketForm = new FormGroup({
      name: new FormControl('', Validators.required),
      egn: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]), // EGN is 10 digits
      idCardNumber: new FormControl('', [Validators.required, Validators.pattern(/^[A-Z0-9]{9}$/)]), // Example: 9 alphanumeric chars
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern(/^\+?\d{6,15}$/)]), // Basic phone validation
      email: new FormControl('', [Validators.required, Validators.email]),

      // Ticket Details
      validity: new FormControl(this.ticketValidities[0], Validators.required),
      ticketType: new FormControl(this.ticketTypes[0], Validators.required),

      // Address
      country: new FormControl('', Validators.required),
      region: new FormControl('', Validators.required),
      municipality: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      street: new FormControl('', Validators.required)
    });
  }

  onSubmit(): void{
    if(this.fishingTicketForm.valid){
      this.ticketSubmitted.emit(this.fishingTicketForm.value);
    } else {
      // Mark all fields as touched to display validation errors
      this.fishingTicketForm.markAllAsTouched();
      // In a real app, you might use a custom modal instead of alert
      console.error('Form is invalid. Please check all fields.');
      alert('Please fill in all required fields correctly!');
    }
  }


  onReset(): void {
    this.fishingTicketForm.reset({
      validity: this.ticketValidities[0],
      ticketType: this.ticketTypes[0]
    });
    // Emit null to clear the displayed ticket in the parent component
    this.ticketSubmitted.emit(null as any);
  }
  
}
