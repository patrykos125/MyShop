import {ItemInBasket} from "./ItemInBasket";


import { Item } from "./Item";


export  class Basket{
  basket:ItemInBasket[]=[];

  public addItem(item:Item){
 //   this.basket.push(item);
     let newItem: ItemInBasket  = new ItemInBasket(item.itemId, item.shortDescription, item.longDescription, item.price, item.imgUrl, item.size,item.category,item.oldPrice,item.sale,1);
     this.basket.push(newItem);
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
