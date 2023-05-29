import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { AdminService } from '../service/admin.service';
import { Order } from '../classes/Order';

@Component({
  selector: 'app-send-payment-confirmation',
  templateUrl: './send-payment-confirmation.component.html',
  styleUrls: ['./send-payment-confirmation.component.css']
})
export class SendPaymentConfirmationComponent {

  orders:Order[] = [];

  expandedRows: boolean[] = [];
  showAll = false;

  constructor(private userService:UserService, private router: Router, private adminService:AdminService){
    userService.checkRole().subscribe((response)=>{
      if(!response){
        this.router.navigate(['/']);
      }
    })

    adminService.getAllOrders().subscribe((response)=>{
      if(response){
        this.orders = response;
      }
    })

  }

  expandRow(index: number): void {
    if (this.expandedRows[index] === undefined) {
      this.expandedRows[index] = true;
    } else {
      this.expandedRows[index] = !this.expandedRows[index];
    }
  }

  viewAll(): void {
    if (this.showAll) {
      this.showAll = false;
      this.expandedRows = [];
    } else {
      this.showAll = true;
    }
  }

  getStatusClass(status: string): string {
    return status === 'Zrealizowane' ? 'badge badge-boxed badge-soft-primary' : 'badge badge-boxed badge-soft-warning';
  }

  changeStatus(order: any): void {
    this.adminService.changeStatus(order).subscribe((response)=>{
      if(response){
        this.orders.find(item => {
          if(item.id == order){
            item.status = "Zrealizowane";
          }
        })
      }
    })
  }

  getTotal(order: any) {
    let total = 0;
    for (let item of order.items) {
      total += item.price * item.amount;
    }
    return total.toFixed(2);
  }

}
