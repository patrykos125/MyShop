import { Order } from "./Order";

export class User{
    id: number;
    firstName: string;
    surname: string;
    city: string;
    street: string;
    houseNumber: string;
    apartmentNumber?: string;
    phoneNumber: string;
    email: string;
    company: boolean;
    zipCode: string;
    nip?: number;
    archiveOrders?: Order[];
    activeOrders?: Order[];
    creationDate?: Date;

    constructor(id: number,
        firstName: string,
        surname: string,
        city: string,
        street: string,
        houseNumber:string,
        phoneNumber: string,
        email: string,
        company: boolean,
        zipCode: string,
        apartmentnumber?: string,
        nip?: number,
        archiveOrders?: Order[],
        activeOrders?: Order[],
        creationDate?: Date,
        ){

        this.id = id;
        this.firstName = firstName;
        this.surname = surname;
        this.city = city;
        this.street = street;
        this.houseNumber = houseNumber;
        this.apartmentNumber = apartmentnumber;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.company = company;
        this.zipCode = zipCode;
        this.nip = nip;
        this.archiveOrders = archiveOrders;
        this.activeOrders = activeOrders;
        this.creationDate = creationDate;
    }

}
