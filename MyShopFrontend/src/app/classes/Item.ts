
import { CommentItem } from "./Comment";
import {Category} from "./enums/Category";

export class Item {

  public itemId:number;
  public shortDescription:string;
  public longDescription:string;
  public price:number;
  public imgUrl:string;
  public size:string;
  public category:Category;
  public oldPrice:number;
  public sale:boolean;
  public comments: CommentItem[];


  constructor(itemId: number, shortDescription: string, longDescription: string, price: number, imgUrl: string, size: string, category: Category, oldPrice: number, sale: boolean, comments: CommentItem[]) {
    this.itemId = itemId;
    this.shortDescription = shortDescription;
    this.longDescription = longDescription;
    this.price = price;
    this.imgUrl = imgUrl;
    this.size = size;
    this.category = category;
    this.oldPrice = oldPrice;
    this.sale = sale;
    this.comments = comments;
  }
}
