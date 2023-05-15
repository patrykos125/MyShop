import {Component, OnInit} from '@angular/core';
import {Item} from "../classes/Item";
import {ItemService} from "../service/item.service";
import {BasketService} from "../service/basket.service";
import {CommentItem} from "../classes/Comment";
import {Basket} from "../classes/Basket";
import {FavoriteService} from "../service/favorite.service";

@Component({
  selector: 'app-fav-page',
  templateUrl: './fav-page.component.html',
  styleUrls: ['./fav-page.component.css']
})
export class FavPageComponent implements OnInit{
  public items: Item[] | undefined;

  constructor(private itemService: ItemService, private favoriteService:FavoriteService,private basketService:BasketService) {

  }

  ngOnInit(): void {
    this.getItems();

  }
  private  getItems(){
    let storedIds = sessionStorage.getItem('favoriteIds');
    let favoriteIds = storedIds ? JSON.parse(storedIds) : [];
    this.items=[];
    favoriteIds.forEach((el:number)=>{
      this.itemService.getItem(el).subscribe((item:Item)=>{
        this.items?.push(item);

      })
    })

  }
  public checkItem(itemID: number):boolean{
    return this.basketService.CheckCart(itemID);
  }
  public countStars(Comments: CommentItem[]): number{
    return Comments.reduce((acc, comment) => acc + comment.rating, 0)/Comments.length;
  }
  public addItem(itemID: number){
    this.basketService.addItemToBasket(itemID);
  }
  public removeItem(itemID:number){
    this.basketService.removeItemFromBasket(itemID);


  }
  public checkFavorite(itemID :number){
    return this.favoriteService.checkFavorite(itemID);

  }
  public  removeFromFavorite(itemID :number,itemIdInArrayOfItems:number){
     this.items?.splice(itemIdInArrayOfItems,1);
     this.favoriteService.deleteFromFavorite(itemID);

  }



}
