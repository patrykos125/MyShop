import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }

  public setUserForOrder(data:any){
    sessionStorage.setItem("userForOrder",data);
  }

  public setSelectedDeliveryType(id:number){
    sessionStorage.setItem("selectedDeliveryType",id.toString());
  }

  public getUserForOrder(){
    return sessionStorage.getItem("userForOrder");
  }

  public getSelectedDeliveryType(){
    return sessionStorage.getItem("selectedDeliveryType");
  }
}
