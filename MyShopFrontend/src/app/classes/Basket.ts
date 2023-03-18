import {ItemInBasket} from "./itemInBasket";


export  class Basket{
  basket:ItemInBasket[]=[
    new ItemInBasket("assets/img/product1.jpg","kurtka niebieska XL",139.99,2),
    new ItemInBasket("assets/img/product1.jpg","kurtka brązowa XL",139.99,2),
    new ItemInBasket("assets/img/product1.jpg","filetowa brązowa XL",139.99,2),
    new ItemInBasket("assets/img/product1.jpg","zielona brązowa XL",139.99,2)
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
