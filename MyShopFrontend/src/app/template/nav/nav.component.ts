import { Component, OnInit } from '@angular/core';
import {Category} from "../../classes/enums/Category";
import { BasketService } from 'src/app/service/basket.service';
import {FavoriteService} from "../../service/favorite.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public BasketCount: number = 0;
  public favoritesCount: number = 0;
  constructor(private basketService: BasketService,private favoriteService:FavoriteService){

  }
  ngOnInit() {
    this.basketService.basketCountEmitter.subscribe((basketCount: number) => {
      this.BasketCount = basketCount;
    });
    this.favoriteService.favoritesCountEmitter.subscribe((favCount:number) =>{
      this.favoritesCount=favCount;
    })

    this.BasketCount = this.basketService.getItemsFromBasket();
    this.favoritesCount=this.favoriteService.getLength();


  }


}

