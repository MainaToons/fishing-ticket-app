
export interface Ticket {
  personalData: PersonalData; // Now a nested object
  address: Address;           // Now a nested object
  validity: '1 Week' | '1 Month' | '6 Months' | '1 Year';
  ticketType: 'Standard' | 'Kids' | 'Pensioner';
}


export interface PersonalData {
  fullName: string;
  egn: string;
  idCardNumber: string;
  phoneNumber: string;
  email: string;
}


export interface Address {
  country: string;
  region: string;
  municipality: string;
  city: string;
  street: string;
}
