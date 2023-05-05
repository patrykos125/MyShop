import { Component, OnInit } from '@angular/core';
import { ItemService } from '../service/item.service';
import { Item } from '../classes/Item';
import { ActivatedRoute, Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { BasketService } from '../service/basket.service';


@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('650ms ease-in', style({ opacity: 1 }))
      ])
    ])
  ]
})
export class ItemPageComponent implements OnInit {
  public ThisItem: Item = {
    itemId: 0,
    shortDescription: '',
    longDescription: '',
    price: 0,
    imgUrl: '',
    size: '',
    category: 0,
    oldPrice: 0,
    sale: false,
  };
  constructor(private itemService: ItemService, private route: ActivatedRoute, private router: Router, private basketService: BasketService) {

  }
  ngOnInit(): void {
    window.scrollTo({ top: 0 });
    this.itemService.getItem(this.route.snapshot.params['id']).subscribe((item:Item)=> {
      if(item){
        this.ThisItem = item;
      } else [
        this.router.navigate(['/']),
      ]
  })
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
