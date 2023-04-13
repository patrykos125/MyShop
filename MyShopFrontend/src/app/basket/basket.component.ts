import {Component, OnInit} from '@angular/core';
import {Basket} from "../classes/Basket";
import { BasketService } from '../service/basket.service';
import { ItemService } from '../service/item.service';
import { Item } from '../classes/Item';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit{
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

}



