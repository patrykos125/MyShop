import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomePageComponent} from "../home-page/home-page.component";
import {BasketComponent} from "../basket/basket.component";
import {UserProfileComponent} from "../user-profile/user-profile.component";
import {CategoryComponent} from "../category/category.component";


const routes:Routes=[


  {path:'',component:HomePageComponent},
  {path:'basket',component:BasketComponent},
  {path:'user-profile', component: UserProfileComponent},
  {path:':category', component: CategoryComponent }





]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule { }
