import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }

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

}
