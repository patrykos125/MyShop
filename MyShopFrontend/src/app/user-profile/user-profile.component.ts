
import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import  { User }  from '../classes/User';
import { trigger, transition, style, animate } from '@angular/animations';
import { FormControl, Validators } from '@angular/forms';
import { UserRegistrationDto } from '../classes/UserRegistrationDto';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('650ms ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class UserProfileComponent implements OnInit {
  selectedOrder: any;
  currentUser: User = {
    id: 0,
    firstName: '',
    surname: '',
    city: '',
    street: '',
    houseNumber: '',
    apartmentNumber: '',
    phoneNumber: '',
    email: '',
    company: false,
    zipCode: '',
    nip: '',
    creationDate: new Date(),
  };



  constructor(private userService: UserService){

  }
  ngOnInit(): void {
    this.userService.getUser().subscribe(user => {

      this.currentUser = user;
    });
  }

  showPersonal: boolean = true;
  showPrivate: boolean = false;
  showChangePassword: boolean = false;
  showChangeData: boolean = false;
  showYourOrders: boolean = false;
  showOrderHistory: boolean = false;
  showComplaints: boolean = false;
  showExpandedOrder: boolean = false;
  ExpandedOrder: any;
  activeLink: string = 'showPersonal';
  passwordOldAlert: string = "";
  passworNewAlert: string = "";

  fistNameAlert:string ="";
  surnameAlert: string = "";
  zipCodeAlert: string = "";
  cityAlert: string = "";
  streetAlert: string = "";
  houseNumberAlert: string = "";
  phoneNumberAlert: string = "";
  nipAlert: string = "";

  getTotal(order: any) {
    let total = 0;
    for (let item of order.items) {
      total += item.price;
    }
    return total.toFixed(2);
  }

  LoadOrder(orderid: number){
    this.ExpandedOrder = null;
    this.ExpandedOrder = this.currentUser.activeOrders?.find((order) => order.id === orderid);
    this.toggleVisibility('showExpandedOrder');
  }


  toggleVisibility(prop: 'showPersonal' | 'showPrivate' | 'showChangePassword' | 'showChangeData' | 'showYourOrders' | 'showOrderHistory'| 'showComplaints' | 'showExpandedOrder') {
    this.showPersonal = false;
    this.showPrivate = false;
    this.showChangePassword = false;
    this.showChangeData = false;
    this.showYourOrders = false;
    this.showOrderHistory = false;
    this.showComplaints = false;
    this.showExpandedOrder = false;
    this[prop] = true;
    this.activeLink = prop;
  }

  submitForm(oldPassword: string, newPassword: string) {
    if(oldPassword.length > 5 && newPassword.length > 5 && newPassword.localeCompare(oldPassword)){
      console.log(oldPassword.toString() + " old : new " + newPassword.toString());
    }
  }

  submitChangeData(firstname: string, surname:string, city:string, address:string, apartmentnumber:string, zipcode:string, email:string, phonenumber:string){

    firstname = firstname !== null && firstname !== "" ? firstname : this.currentUser.firstName;
    surname = surname !== null && surname !== "" ? surname : this.currentUser.surname;

    this.currentUser.firstName = firstname;
    this.currentUser.surname = surname;

  }

  selectOrder(order: any) {
    this.selectedOrder = order;
    const dropdownButton: any = document.querySelector('#orderDropdown');
    dropdownButton.textContent = `ID: ${order.id} - ${order.date}`;
  }

  logout(): any{
    this.userService.logout();
  }

  validPersonalData(data:UserRegistrationDto){
    this.fistNameAlert = "";
    if(data.firstName != ""){
    const firstNameControl = new FormControl(data.firstName, [
      Validators.required,
      Validators.minLength(2),
    ]);
    if(firstNameControl.invalid){
      this.fistNameAlert="Pole imie musi zawierać co najmiej 2 znaki"
    }
    if(data.firstName === this.currentUser.firstName){
      this.fistNameAlert="Takie samo imie"
    }
    }
    this.surnameAlert = "";
    if(data.surname != ""){
      const surnameNameControl = new FormControl(data.surname, [
        Validators.required,
        Validators.minLength(2),
      ]);
      if(surnameNameControl.invalid){
        this.surnameAlert="Pole nazwisko musi zawierać co najmiej 2 znaki"
      }
      if(data.surname === this.currentUser.surname){
        this.surnameAlert="Takie samo nazwisko"
      }
    }
    this.zipCodeAlert="";
    if(data.zipCode != ""){
    const zipCodeControl = new FormControl(data.zipCode, [
     Validators.required,
     Validators.pattern(/^[0-9]{2}-[0-9]{3}$/)
   ]);
   if(  zipCodeControl.invalid){
     this.zipCodeAlert="Nie prawidłowy kod pocztowy"
    }
    if(data.zipCode === this.currentUser.zipCode){
      this.zipCodeAlert="Taki sam kod pocztowy"
    }
    }
    this.cityAlert="";
    if(data.city != ""){
    const cityControl = new FormControl(data.city, [
      Validators.required,
      Validators.minLength(2)
    ]);
    if(cityControl.invalid){
      this.cityAlert="Pole miasto musi zawierać co najmiej 2 znaki"
    }
    if(data.city === this.currentUser.city){
      this.cityAlert="Takie samo miasto"
    }
    }
    this.streetAlert="";
    if(data.street != ""){
      const streetControl = new FormControl(data.street, [
        Validators.required,
        Validators.minLength(2)
      ]);
      if(streetControl.invalid){
        this.streetAlert="Pole ulica musi zawierać co najmiej 2 znaki"
      }
      if(data.street === this.currentUser.street){
        this.streetAlert="Taka sama ulica"
      }
    }
    this.houseNumberAlert="";
    if(data.houseNumber !=""){
      const houseNumberControl = new FormControl(data.houseNumber, [
        Validators.required,
        Validators.minLength(1)
      ]);
      if(houseNumberControl.invalid){
        this.houseNumberAlert="Pole numer doumu nie może być puste "
      }
      if(data.houseNumber === this.currentUser.houseNumber){
        this.houseNumberAlert="Taki sam numer domu"
      }
    }
    this.phoneNumberAlert="";
    if(data.phoneNumber != ""){
    const phoneNumberControl = new FormControl(data.phoneNumber, [
      Validators.required,
      Validators.pattern(/^(\+48)? ?[1-9]\d{2} ?\d{3} ?\d{3}$/)
    ]);
    if(phoneNumberControl.invalid){
      this.phoneNumberAlert="Nie prawidłowy numer telefonu"
    }
    if(data.phoneNumber === this.currentUser.phoneNumber){
      this.phoneNumberAlert="Taki sam numer telefonu"
    }
    }

    this.nipAlert="";
    if(data.nip !="" && this.currentUser.company){
       const nipControl = new FormControl(data.nip, [
       Validators.required,
        Validators.pattern(/^[0-9]{10}$/)

      ]);
      if (nipControl.invalid) {
        this.nipAlert = "Nie prawidłowy nip"
      }
      let nipToCheck:any = this.currentUser.nip!;
      if(data.nip === nipToCheck){
        this.nipAlert="Taki sam numer nip"
      }
    }

    if (
    this.fistNameAlert === "" &&
    this.surnameAlert === "" &&
    this.zipCodeAlert === "" &&
    this.cityAlert === "" &&
    this.streetAlert === "" &&
    this.houseNumberAlert === "" &&
    this.phoneNumberAlert === ""
    ) {
      if(this.currentUser.company && this.nipAlert != ""){
        return;
      }

      const values = Object.values(data);
      const anyData = values.some(value => value !== "");

      if (anyData) {
        this.userService.changePersonalData(data).subscribe((response)=>{
            if(response){
              window.location.reload();
            }
        });
      } else {
          return;
      }
  }
}




  validData(passwords: string){
    let password = JSON.parse(JSON.stringify(passwords));
    this.passwordOldAlert="";
    const passwordoldControl = new FormControl(password['oldpass'], [
      Validators.required,
      Validators.minLength(8)
    ]);
    const passwordControl = new FormControl(password['newpass'], [
      Validators.required,
      Validators.minLength(8)
    ]);
    this.passworNewAlert="";
    if(passwordControl.invalid){
      this.passworNewAlert="Hasło musi zawierać co najmniej  8 znaków"
    }
    if(passwordoldControl.invalid){
      this.passwordOldAlert="Hasło musi zawierać co najmniej  8 znaków"
    }
    if(password['oldpass'] === password['newpass']){
      this.passworNewAlert="Hasła są takie same"
    }

    let passwordNotTheSame = password['oldpass'] != password['newpass'];

    if(passwordControl.valid && passwordoldControl.valid && passwordNotTheSame){
      this.userService.changePassword(password['oldpass'], password['newpass']).subscribe((response) =>{
        if(response){
          this.passworNewAlert = "Hasło zostało zmienione";
        } else {
          this.passwordOldAlert = "Błędne hasło"
        }
      })
    }

  }


}
