import { Component } from '@angular/core';
import {Category} from "../../classes/enums/category";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  category=Object.keys(Category).filter(value => isNaN(Number(value)));



}

