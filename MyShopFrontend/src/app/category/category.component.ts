import {Component, OnInit} from '@angular/core';
import {Item} from "../classes/Item";
import {ItemService} from "../service/item.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{

  public items: Item[] | undefined;
  data: string | null ='';

  constructor(private itemService: ItemService,private route: ActivatedRoute) {

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

}
