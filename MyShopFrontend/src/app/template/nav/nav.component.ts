import { Component, OnInit } from '@angular/core';
import {Category} from "../../classes/enums/Category";
import { BasketService } from 'src/app/service/basket.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public BasketCount: number = 0;
  constructor(private basketService: BasketService){

  }
  ngOnInit() {
    this.basketService.basketCountEmitter.subscribe((basketCount: number) => {
      this.BasketCount = basketCount;
    });

    this.BasketCount = this.basketService.getItemsFromBasket();
  }


}

