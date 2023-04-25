import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomePageComponent} from "../home-page/home-page.component";
import {BasketComponent} from "../basket/basket.component";
import {UserProfileComponent} from "../user-profile/user-profile.component";
import {CategoryComponent} from "../category/category.component";
import { ItemPageComponent } from '../item-page/item-page.component';
import {RegistrationPageComponent} from "../registration-page/registration-page.component";
import {LoginPageComponent} from "../login-page/login-page.component";
import { UserService } from '../service/user.service';


const routes:Routes=[


  {path:'',component:HomePageComponent},
  {path:'basket',component:BasketComponent},
  {path:'user-profile', component: UserProfileComponent,  canActivate:[UserService]},
  {path: 'registration', component: RegistrationPageComponent },
  {path: 'login', component: LoginPageComponent,  canActivate:[UserService] },
  {path:':category', component: CategoryComponent },
  {path: 'item/:id', component: ItemPageComponent }

]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule { }
