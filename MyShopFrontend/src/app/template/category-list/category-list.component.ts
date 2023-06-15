import { Component } from '@angular/core';
import {Category} from "../../classes/enums/Category";
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {

  category=Object.keys(Category).filter(value => isNaN(Number(value)));
  constructor(private userService:UserService){

  }
  isLogged(): boolean{
    return this.userService.isLogged;
  }
  isAdmin():boolean{
    return this.userService.isAdmin;
  }

  logout(): any{
    this.userService.logout();
  }
}
