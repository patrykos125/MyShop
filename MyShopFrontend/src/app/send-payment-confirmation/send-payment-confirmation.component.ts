import { ChangeDetectorRef, Component } from '@angular/core';
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

  constructor(private userService:UserService, private router: Router, private adminService:AdminService, private cdr: ChangeDetectorRef){
    userService.checkRole().subscribe((response)=>{
      if(!response){
        this.router.navigate(['/']);
      }
    })

    adminService.getAllOrders().subscribe((response)=>{
      if(response){
        this.orders = response;
        this.addAvatars();
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

  getRandomAvatar(): string {
    const avatars: string[] = [
      'https://bootdey.com/img/Content/avatar/avatar1.png',
      'https://bootdey.com/img/Content/avatar/avatar2.png',
      'https://bootdey.com/img/Content/avatar/avatar3.png',
      'https://bootdey.com/img/Content/avatar/avatar4.png'
    ];
    const randomIndex = Math.floor(Math.random() * avatars.length);
    return avatars[randomIndex];
  }

  addAvatars(): void {
    this.orders.forEach(order => {
      order.avatar = this.getRandomAvatar();
      console.log(this.orders);
    });
  }
}
