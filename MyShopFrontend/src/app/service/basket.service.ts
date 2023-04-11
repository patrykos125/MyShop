import { EventEmitter, Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })

export class BasketService {
    basketCountEmitter = new EventEmitter<number>();

    public addItemToBasket(id: number){
        let storedIds = sessionStorage.getItem('basketIds');
        let basketIds = storedIds ? JSON.parse(storedIds) : [];
        basketIds.push(id);
        sessionStorage.setItem('basketIds', JSON.stringify(basketIds));
        this.updateCart();
      }

      public getItemsFromBasket(): number{
        let storedIds = sessionStorage.getItem('basketIds');
        let basketIds = storedIds ? JSON.parse(storedIds) : [];
        return basketIds.length;
      }

      public removeItemFromBasket(itemID:number){
        const basketIds: [] = JSON.parse(sessionStorage.getItem('basketIds') || '[]').map(Number);
        const updatedIds = basketIds.filter(id => id !== itemID);
        sessionStorage.setItem('basketIds', JSON.stringify(updatedIds));
        this.updateCart();
      }

      updateCart() {
        let storedIds = sessionStorage.getItem('basketIds');
        let basketIds = storedIds ? JSON.parse(storedIds) : [];
        const basketCount = basketIds.length;
        this.basketCountEmitter.emit(parseInt(basketCount));
      }
      
      public CheckCart(itemID:number):boolean{
        const basketIds: number[] = JSON.parse(sessionStorage.getItem('basketIds') || '[]').map(Number);
        return basketIds.includes(itemID);
      }
}