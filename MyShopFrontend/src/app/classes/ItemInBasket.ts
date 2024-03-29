import { CommentItem } from "./Comment";
import {Item} from "./Item";

import {Category} from "./enums/Category";

export class ItemInBasket extends Item {
  amount: number;


  constructor(id: number, shortDescription: string, longDescription: string, price: number, imgUrl: string, size :string, category: Category, oldPrice: number, sale: boolean, amount: number, commentsItem: CommentItem[]) {
    super(id, shortDescription, longDescription, price, imgUrl, size, category, oldPrice, sale, commentsItem);
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
