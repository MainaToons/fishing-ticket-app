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
      personalData: new FormGroup({
        fullName: new FormControl('', Validators.required),
        egn: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
        idCardNumber: new FormControl('', [Validators.required, Validators.pattern(/^[A-Z0-9]{9}$/i)]),
        phoneNumber: new FormControl('', [Validators.required, Validators.pattern(/^\+?\d{6,15}$/)]),
        email: new FormControl('', [Validators.required, Validators.email]),
      }),

      address: new FormGroup({
        country: new FormControl('', Validators.required),
        region: new FormControl('', Validators.required),
        municipality: new FormControl('', Validators.required),
        city: new FormControl('', Validators.required),
        street: new FormControl('', Validators.required)
      }),

      validity: new FormControl(this.ticketValidities[0], Validators.required),
      ticketType: new FormControl(this.ticketTypes[0], Validators.required)
    });
  }

  onSubmit(): void{
    if (this.fishingTicketForm.valid) {
      const submittedTicket: Ticket = this.fishingTicketForm.value;
      console.log('TicketFormComponent: Emitting valid ticket:', submittedTicket);
      this.ticketSubmitted.emit(submittedTicket);
    } else {
      this.fishingTicketForm.markAllAsTouched();
      this.markAllControlsAsTouched(this.fishingTicketForm);
      console.error('TicketFormComponent: Form is invalid. Please check all fields.');
    }
  }


  onReset(): void {
    console.log('TicketFormComponent: Resetting form and emitting null.');
    this.fishingTicketForm.reset({
      personalData: {
        fullName: '', egn: '', idCardNumber: '', phoneNumber: '', email: ''
      },
      address: {
        country: '', region: '', municipality: '', city: '', street: ''
      },
      validity: this.ticketValidities[0],
      ticketType: this.ticketTypes[0]
    });
    this.ticketSubmitted.emit(null);
  }

  private markAllControlsAsTouched(formGroup: FormGroup): void {
    Object.values(formGroup.controls).forEach(control => {
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.markAllControlsAsTouched(control);
      }
    });
  }

   public get personalDataGroup(): FormGroup {
    const control = this.fishingTicketForm.get('personalData');
    if (control instanceof FormGroup) {
      return control;
    }
    console.warn('personalDataGroup is not a FormGroup or not found. Returning empty FormGroup.');
    return new FormGroup({});
  }

  public get addressGroup(): FormGroup {
    const control = this.fishingTicketForm.get('address');
    if (control instanceof FormGroup) {
      return control;
    }
    console.warn('addressGroup is not a FormGroup or not found. Returning empty FormGroup.');
    return new FormGroup({});
  }
}
