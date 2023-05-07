import {Component, OnInit} from '@angular/core';
import {Item} from "../classes/Item";
import {ItemService} from "../service/item.service";
import {ActivatedRoute} from "@angular/router";
import { BasketService } from '../service/basket.service';
import { CommentItem } from '../classes/Comment';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{

  public items: Item[] | undefined;
  data: string | null ='';

  constructor(private itemService: ItemService,private route: ActivatedRoute, private basketService: BasketService) {

    this.data = this.route.snapshot.paramMap.get('category');
  }
  public getItems():void{

    this.itemService.getCategoryItem(this.data).subscribe((response:Item[])=>{
      this.items=response;

    })
  }

  ngOnInit(): void {
    this.getItems();
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
  
  public countStars(Comments: CommentItem[]): number{
    return Comments.reduce((acc, comment) => acc + comment.rating, 0)/Comments.length;
  }

}
