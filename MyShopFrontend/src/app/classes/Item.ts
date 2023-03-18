export class Item {
  imgURL: string;
  description: string;
  price: number


  constructor(imgURL: string, description: string, price: number) {
    this.imgURL = imgURL;
    this.description = description;
    this.price = price;

  }

}
