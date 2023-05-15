import {Component, OnInit} from '@angular/core';
import {Item} from "../../classes/Item";
import {ItemService} from "../../service/item.service";
import {BasketService} from "../../service/basket.service";
import {CommentItem} from "../../classes/Comment";
import {Basket} from "../../classes/Basket";

@Component({
  selector: 'app-fav-page',
  templateUrl: './fav-page.component.html',
  styleUrls: ['./fav-page.component.css']
})
export class FavPageComponent implements OnInit{
  basket :Basket = new Basket();
  deliveryCost:number =19.99;
  public matchingItems: Item[] | undefined;
  public items: Item[] | undefined;

  constructor(private itemService: ItemService, private basketService:BasketService) {

  }

  public getItems():void{

    this.itemService.getAllItems().subscribe((response:Item[])=>{
      this.items=response;
      this.getMatchingItems();
    });

  }

  ngOnInit(): void {
    this.getItems();
  }

  public RemoveItem(itemID: number, Index:number){
    this.basketService.removeItemFromBasket(itemID);
    this.basket.romeveItem(Index);
  }


  public getMatchingItems(): void {
    const ids: number[] = JSON.parse(sessionStorage.getItem('basketIds') || '[]').map(Number);
    this.matchingItems = this.items?.filter(item =>  ids.includes(item.itemId));
    this.matchingItems?.forEach(item=>{
      this.basket.addItem(item);
    });
  }

  // public items: Item[] | undefined  ;
  //
  // constructor(private itemService: ItemService, private basketService: BasketService) {
  //
  // }
  // public getItems():void{
  //
  //   this.itemService.getAllItems().subscribe((response:Item[])=>{
  //     this.items=response;
  //     console.log(this.items);
  //   })
  // }
  //
  // ngOnInit(): void {
  //   this.getItems()
  // }
  //
  // public checkItem(itemID: number):boolean{
  //   return this.basketService.CheckCart(itemID);
  // }
  //
  // public addItem(itemID: number){
  //   this.basketService.addItemToBasket(itemID);
  // }
  //
  // public removeItem(itemID:number){
  //   this.basketService.removeItemFromBasket(itemID);
  // }
  //
  // public countStars(Comments: CommentItem[]): number{
  //   return Comments.reduce((acc, comment) => acc + comment.rating, 0)/Comments.length;
  // }
  //


}
