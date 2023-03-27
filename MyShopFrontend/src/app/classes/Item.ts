import {Size} from "./enums/Size";
import {Category} from "./enums/Category";

export class Item {

  public id:number;
  public shortDescription:string;
  public longDescription:string;
  public price:number;
  public imgUrl:string;
  public size:Size;
  public category:Category;


  constructor(id: number, shortDescription: string, longDescription: string, price: number, imgUrl: string, size: Size, category: Category) {
    this.id = id;
    this.shortDescription = shortDescription;
    this.longDescription = longDescription;
    this.price = price;
    this.imgUrl = imgUrl;
    this.size = size;
    this.category = category;
  }
}
