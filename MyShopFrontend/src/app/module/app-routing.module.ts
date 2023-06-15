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
import {FavPageComponent} from "../fav-page/fav-page.component";
import {OrderComponent} from "../order/order.component";
import {OrderDeliveryCheckComponent} from "../order-delivery-check/order-delivery-check.component";
import {OrderPaymentComponent} from "../order-payment/order-payment.component";
import {SendPaymentConfirmationComponent} from "../send-payment-confirmation/send-payment-confirmation.component";
import {AddItemPageComponent} from "../admin-panel/add-item-page/add-item-page.component";


const routes:Routes=[


  {path:'',component:HomePageComponent},
  {path:'basket',component:BasketComponent},
  {path:'user-profile', component: UserProfileComponent,  canActivate:[UserService]},
  {path: 'registration', component: RegistrationPageComponent },
  {path: 'fav-page', component: FavPageComponent},
  {path: 'order', component: OrderComponent},
  {path: 'order-delivery-check', component: OrderDeliveryCheckComponent},
  {path: 'order-payment', component: OrderPaymentComponent},
  {path: 'send-payment-confirmation', component: SendPaymentConfirmationComponent},
  {path: 'admin-panel/add-item', component: AddItemPageComponent},
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
