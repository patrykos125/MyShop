import {Component, OnInit} from '@angular/core';
// @ts-ignore
import { v4 as uuidv4 } from 'uuid';
import {HttpClient} from "@angular/common/http";
import { OrderService } from '../service/order.service';
import { Basket } from '../classes/Basket';
import { BasketService } from '../service/basket.service';




@Component({
  selector: 'app-order-payment',
  templateUrl: './order-payment.component.html',
  styleUrls: ['./order-payment.component.css']
})
export class OrderPaymentComponent implements  OnInit{
  payment_title : string='';

  ngOnInit(): void {
   this.payment_title= uuidv4();

  }

  constructor(private http :HttpClient, private orderService:OrderService, private basketService:BasketService) {
  }

  // clean basket after transaction
  public cleanBasket(){

    sessionStorage.setItem('basketIds', JSON.stringify([]));

  }
  public sendOrderToBackend(){
    this.orderService.sendOrder(this.orderService.basket).subscribe((response)=>{
        if(response){
          this.cleanBasket();
          this.orderService.basket = new Basket();
          this.basketService.updateCart();
        }
    })
  }










}


