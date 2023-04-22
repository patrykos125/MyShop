import { Component } from '@angular/core';
import {Category} from "../../classes/enums/Category";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {

  category=Object.keys(Category).filter(value => isNaN(Number(value)));

}
