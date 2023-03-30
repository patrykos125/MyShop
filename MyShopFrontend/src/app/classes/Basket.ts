import {ItemInBasket} from "./ItemInBasket";
import {Size} from "./enums/Size";
import {Category} from "./enums/Category";


export  class Basket{
  basket:ItemInBasket[]=[

    new ItemInBasket(1,"to jest jakis bardzo zwyczajny opis produktu","na razie dłuzszy opis nie jest potrzebny",120.88,"assets/img/product1.jpg",Size.L,Category.HOODIE, 20,true,3) ,
    new ItemInBasket(1,"to jest jakis bardzo zwyczajny opis produktu","na razie dłuzszy opis nie jest potrzebny",120.88,"assets/img/product1.jpg",Size.L,Category.HOODIE, 20,true,3) ,
    new ItemInBasket(1,"to jest jakis bardzo zwyczajny opis produktu","na razie dłuzszy opis nie jest potrzebny",120.88,"assets/img/product1.jpg",Size.L,Category.HOODIE, 20,true,3) ,
    new ItemInBasket(1,"to jest jakis bardzo zwyczajny opis produktu","na razie dłuzszy opis nie jest potrzebny",120.88,"assets/img/product1.jpg",Size.L,Category.HOODIE, 20,true,3)
  ];

  public addItem(item:ItemInBasket){
    this.basket.push(item);
  }
  public romeveItem(index:number){

this.basket.splice(index,1);

  }
  public getSum():number{
    if(this.basket.length==0){return 0;}
     return this.basket.map(ItemInBasket=>ItemInBasket.getSum())
      .reduce((prev,next)=>prev+next);
  }
  public getArray():ItemInBasket[]{
    return this.basket
  }

}
