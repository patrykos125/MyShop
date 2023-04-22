
export  class  UserRegistrationDto{
  public userId: number;
  public password: string;
  public firstName: string;
  public zipCode: string;
  public city: string;
  public street: string;
  public apartmentNumber: string;
  public surname: string;
  public phoneNumber: string;
  public email: string;
  public company: boolean;
  public nip: string;


  constructor(userId: number, password: string, firstName: string, zipCode: string, city: string, street: string, apartmentNumber: string, surname: string, phoneNumber: string, email: string, company: boolean, nip: string) {
    this.userId = userId;
    this.password = password;
    this.firstName = firstName;
    this.zipCode = zipCode;
    this.city = city;
    this.street = street;
    this.apartmentNumber = apartmentNumber;
    this.surname = surname;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.company = company;
    this.nip = nip;
  }
}
