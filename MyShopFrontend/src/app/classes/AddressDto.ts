 export class AddressDto {
    public firstName: string ;
   public surname: string;
   public zipCode: string;
   public city: string;
   public street: string;
   public houseNumber: string;
   public apartmentNumber?: string;
   public phoneNumber: string;

   constructor(firstName: string, surname: string, zipCode: string, city: string, street: string, houseNumber: string, apartmentNumber: string, phoneNumber: string) {
     this.firstName = firstName;
     this.surname = surname;
     this.zipCode = zipCode;
     this.city = city;
     this.street = street;
     this.houseNumber = houseNumber;
     this.apartmentNumber = apartmentNumber;
     this.phoneNumber = phoneNumber;
   }
 }
