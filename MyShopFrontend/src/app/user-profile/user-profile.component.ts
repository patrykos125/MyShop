
import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import  { User }  from '../classes/User';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  selectedOrder: any;
  currentUser: User = {
    id: 0,
    firstName: '',
    surname: '',
    city: '',
    address: '',
    apartmentNumber: '',
    phoneNumber: '',
    email: '',
    company: false,
    zipCode: '',
    nip: 0
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




}