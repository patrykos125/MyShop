import {Item} from "./Item";

export class ItemInBasket extends Item {
  amount: number;

  constructor(imgURL: string, description: string, price: number, amount: number) {
    super(imgURL, description, price);
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
