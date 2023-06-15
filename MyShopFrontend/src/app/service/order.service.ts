import { Injectable } from '@angular/core';
import { Basket } from '../classes/Basket';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ItemInBasket } from '../classes/ItemInBasket';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient,) { }
  basket :Basket = new Basket();

  public setUserForOrder(data:any){
    const stringifiedObject = JSON.stringify(data);
    sessionStorage.setItem("userForOrder",stringifiedObject);
  }

  public setSelectedDeliveryType(id:number){
    sessionStorage.setItem("selectedDeliveryType",id.toString());
  }

  public getUserForOrder(){
    if(sessionStorage.getItem("userForOrder") != null){
      const item = sessionStorage.getItem("userForOrder");
      try{
        if(item != null) {
          return JSON.parse(item.toString());
        }
      }catch(NullPointerException){}
    }
      return "";
  }

  public getSelectedDeliveryType(){
    return sessionStorage.getItem("selectedDeliveryType");
  }

  sendOrder(basket: Basket): Observable<boolean>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `${sessionStorage.getItem('token')}`
      })
    };
    const extractItemsFromBasket: ItemInBasket[] = basket.basket.map((item: ItemInBasket) => item);
    return this.http.post<boolean>('http://localhost:8080/user/saveOrder', extractItemsFromBasket, httpOptions);
  }



}
