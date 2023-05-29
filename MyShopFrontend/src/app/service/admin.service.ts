import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Order } from "../classes/Order";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
  })

export class AdminService{

    constructor(private http: HttpClient, private router:Router) { }
    
    getAllOrders():Observable<Order[]>{
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization': `${sessionStorage.getItem('token')}`
          })
        };
        return this.http.get<Order[]>('http://localhost:8080/order/getAllOrders', httpOptions);
      }

  changeStatus(orderID: number):Observable<Boolean>{
    const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': `${sessionStorage.getItem('token')}`
        })
      };
      return this.http.put<any>('http://localhost:8080/order/changeOrderStatus', orderID, httpOptions);
  }


}
