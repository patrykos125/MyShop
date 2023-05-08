
import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import  { User }  from '../classes/User';
import { trigger, transition, style, animate } from '@angular/animations';
import { FormControl, Validators } from '@angular/forms';


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
    nip: 0,
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