import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-personal-data-form',
  standalone: false,
  templateUrl: './personal-data-form.html',
  styleUrl: './personal-data-form.css'
})
export class PersonalDataForm implements OnInit{
  @Input() personalDataGroup!: FormGroup;

  ngOnInit(): void {
    if (!this.personalDataGroup) {
      console.error('PersonalDataFormComponent: personalDataGroup input is required!');
    }
  }
}
