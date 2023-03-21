import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {Basket} from "../classes/Basket";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  basket :Basket = new Basket();
}
