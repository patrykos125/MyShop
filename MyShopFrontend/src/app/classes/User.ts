import { Order } from "./Order";

export class User{
    id: number;
    firstName: string;
    surname: string;
    city: string;
    address: string;
    apartmentNumber: string;
    phoneNumber: string;
    email: string;
    company: boolean;
    zipCode: string;
    nip?: number;
    archiveOrders?: Order[];
    activeOrders?: Order[];

    constructor(id: number,
        firstName: string,
        surname: string,
        city: string,
        address: string,
        apartmentnumber: string,
        phoneNumber: string,
        email: string,
        company: boolean,
        zipCode: string,
        nip?: number, 
        archiveOrders?: Order[],
        activeOrders?: Order[]){

        this.id = id;
        this.firstName = firstName;
        this.surname = surname;
        this.city = city;
        this.address = address;
        this.apartmentNumber = apartmentnumber;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.company = company;
        this.zipCode = zipCode;
        this.nip = nip;
        this.archiveOrders = archiveOrders;
        this.activeOrders = activeOrders;
    }
    
}