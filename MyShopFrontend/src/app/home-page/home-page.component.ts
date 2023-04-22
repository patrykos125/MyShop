import {Component, OnInit} from '@angular/core';
import {ItemService} from "../service/item.service";
import {Item} from "../classes/Item";
import { BasketService } from '../service/basket.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{

 public items: Item[] | undefined  ;

  constructor(private itemService: ItemService, private basketService: BasketService) {

  }
  public getItems():void{

     this.itemService.getAllItems().subscribe((response:Item[])=>{
       this.items=response;

     })
  }

  ngOnInit(): void {
    this.getItems()
  }

  public checkItem(itemID: number):boolean{
    return this.basketService.CheckCart(itemID);
  }

  public addItem(itemID: number){
    this.basketService.addItemToBasket(itemID);
  }

  public removeItem(itemID:number){
  this.basketService.removeItemFromBasket(itemID);
  }


}
