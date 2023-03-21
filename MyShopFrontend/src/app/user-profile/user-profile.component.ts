
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  showPersonal: boolean = true;
  showPrivate: boolean = false;
  showChangePassword: boolean = false;
  showChangeData: boolean = false;
  showYourOrders: boolean = false;
  showOrderHistory: boolean = false;
  showWishList: boolean = false;

  toggleVisibility(prop: 'showPersonal' | 'showPrivate' | 'showChangePassword' | 'showChangeData' | 'showYourOrders' | 'showOrderHistory'| 'showWishList') {
    this.showPersonal = false;
    this.showPrivate = false;
    this.showChangePassword = false;
    this.showChangeData = false;
    this.showYourOrders = false;
    this.showOrderHistory = false;
    this.showWishList = false;
    this[prop] = true;
  }


}