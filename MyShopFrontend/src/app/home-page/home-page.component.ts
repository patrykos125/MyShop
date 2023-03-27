import {Component, OnInit} from '@angular/core';
import {Basket} from "../classes/Basket";
import {ItemService} from "../service/item.service";
import {Item} from "../classes/Item";
import {Observable} from "rxjs";




@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{

 public items: Item[] | undefined  ;

  constructor(private itemService: ItemService) {

  }
  public getItems():void{

     this.itemService.getAllItems().subscribe((response:Item[])=>{
       this.items=response;

     })
  }

  ngOnInit(): void {
    this.getItems()
  }

}
