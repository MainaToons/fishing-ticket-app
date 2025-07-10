export interface Ticket{
    validity: '1 Week' | '1 Month' | '6 Months' | '1 Year';
    ticketType:'Standard' | 'Kids' | 'Pensioner';
    name:string;
    egn:number;
    idCardNumber:string;
    phoneNumber:string;
    email:string;

    country:string;
    region:string;
    municipality:string;
    city:string;
    street:string;
}