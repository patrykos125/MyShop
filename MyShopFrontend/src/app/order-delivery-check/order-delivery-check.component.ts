import {Component, OnInit} from '@angular/core';
import {OrderService} from "../service/order.service";
import {User} from "../classes/User";
import {Item} from "../classes/Item";
import {ItemService} from "../service/item.service";
import {Basket} from "../classes/Basket";

@Component({
  selector: 'app-order-delivery-check',
  templateUrl: './order-delivery-check.component.html',
  styleUrls: ['./order-delivery-check.component.css']
})
export class OrderDeliveryCheckComponent implements OnInit{

  constructor(private orderService: OrderService, private itemService: ItemService){}

  currentUser: User = {
    id: 0,
    firstName: '',
    surname: '',
    city: '',
    street: '',
    houseNumber: '',
    apartmentNumber: '',
    phoneNumber: '',
    userRole: '',
    email: '',
    company: false,
    zipCode: '',
    nip: '',
    creationDate: new Date(),
  };
  selectedDeliveryOptions :string="";

  basket :Basket = new Basket();
  deliveryCost:number =19.99;
  public matchingItems: Item[] | undefined;
  public items: Item[] | undefined;


  ngOnInit(): void {
    this.currentUser = this.orderService.getUserForOrder();
    this.getItems();
  }

  public getItems():void{

    this.itemService.getAllItems().subscribe((response:Item[])=>{
      this.items=response;
      this.getMatchingItems();
    });
  }

  public getMatchingItems(): void {
    const ids: number[] = JSON.parse(sessionStorage.getItem('basketIds') || '[]').map(Number);
    this.matchingItems = this.items?.filter(item =>  ids.includes(item.itemId));
    this.matchingItems?.forEach(item=>{
      this.basket.addItem(item);
    });
  }
  public changeDeliveryCost(cost :number){
    this.deliveryCost=cost;

  }

}
