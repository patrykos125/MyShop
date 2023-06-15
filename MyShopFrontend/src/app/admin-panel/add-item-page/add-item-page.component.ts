import { Component } from '@angular/core';
import {Item} from "../../classes/Item";
import {FormControl, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ItemService} from "../../service/item.service";

@Component({
  selector: 'app-add-item-page',
  templateUrl: './add-item-page.component.html',
  styleUrls: ['./add-item-page.component.css']
})
export class AddItemPageComponent {
  public priceAlert:string="";
  public oldPriceAlert:string="";
  public showSuccessMessage: boolean = false;


  constructor(private itemService:ItemService) {
  }

  public validData(item:Item){

    this.priceAlert="";
    const priceControl = new FormControl(item.price, [
      Validators.required,
      Validators.pattern(/^(?!0*(\.0{1,2})?$)([1-9]\d*|0)(\.\d{1,2})?$/)
    ]);
    if(priceControl.invalid){
      this.priceAlert="Nie prawidłowy format ceny"

    }
    this.oldPriceAlert="";
    const oldPriceControl = new FormControl(item.oldPrice, [
      Validators.required,
      Validators.pattern(/^(?!0*(\.0{1,2})?$)([1-9]\d*|0)(\.\d{1,2})?$/)
    ]);
    if(oldPriceControl.invalid){
      this.oldPriceAlert="Nie prawidłowy format ceny"

    }
    if(priceControl.valid &&
    oldPriceControl.valid){
      this.onSubmit(item);

      this.showSuccessMessage = true;

      setTimeout(() => {
        this.showSuccessMessage = false;
      }, 2000);

    }


  }

  private onSubmit(item: Item) {
    this.itemService.addItem(item);





  }

}
