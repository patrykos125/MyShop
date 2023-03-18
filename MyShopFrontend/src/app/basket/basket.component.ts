import {Component} from '@angular/core';
import {ItemInBasket} from "../classes/itemInBasket";
import {Basket} from "../classes/Basket";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent {

  deliveryCost:number =19.99;

  basket :Basket = new Basket();



}



