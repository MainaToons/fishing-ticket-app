import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-address-form',
  standalone: false,
  templateUrl: './address-form.html',
  styleUrl: './address-form.css'
})
export class AddressForm implements OnInit {
  @Input() addressGroup!: FormGroup;

  ngOnInit(): void {
    if (!this.addressGroup) {
      console.error('AddressFormComponent: addressGroup input is required!');
    }
  }
}
