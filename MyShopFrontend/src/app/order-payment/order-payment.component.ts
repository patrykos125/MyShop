import {Component, OnInit} from '@angular/core';
// @ts-ignore
import { v4 as uuidv4 } from 'uuid';
import {HttpClient, HttpResponse} from "@angular/common/http";




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

  constructor(private http :HttpClient) {
  }

  // clean basket after transaction
  public cleanBasket(){

    sessionStorage.setItem('basketIds', JSON.stringify([]));

  }
  public sendOrderToBackend(){
    let storedIds = sessionStorage.getItem('basketIds');
    let basketIds = storedIds ? JSON.parse(storedIds) : [];

    //TODO help me





  }










}


