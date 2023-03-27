import {Item} from "./Item";
import {Size} from "./enums/Size";
import {Category} from "./enums/Category";

export class ItemInBasket extends Item {
  amount: number;


  constructor(id: number, shortDescription: string, longDescription: string, price: number, imgUrl: string, size: Size, category: Category, amount: number) {
    super(id, shortDescription, longDescription, price, imgUrl, size, category);
    this.amount = amount;
  }

  getSum() {
    return this.amount * this.price;
  }

  increaseAmount() {
    console.log()
    this.amount++;
  }

  decreaseamount() {
    if (this.amount > 1)
      this.amount--;
  }

}
