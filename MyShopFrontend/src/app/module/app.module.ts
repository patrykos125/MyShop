import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomePageComponent } from '../home-page/home-page.component';
import {HeaderComponent} from "../template/header/header.component";
import { NavComponent } from '../template/nav/nav.component';
import { FooterComponent } from '../template/footer/footer.component';
import { BasketComponent } from '../basket/basket.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterLink, RouterOutlet} from "@angular/router";
import { AppComponent } from '../app.component';
import {HttpClientModule} from "@angular/common/http";
import { UserProfileComponent } from '../user-profile/user-profile.component';
import {NgOptimizedImage} from "@angular/common";
import {CategoryComponent} from "../category/category.component";
import {CategoryListComponent} from "../template/category-list/category-list.component";
import { ItemPageComponent } from '../item-page/item-page.component';
import {RegistrationPageComponent} from "../registration-page/registration-page.component";
import {FormsModule} from "@angular/forms";
import {LoginPageComponent} from "../login-page/login-page.component";
import { FavPageComponent } from '../fav-page/fav-page.component';
import { OrderComponent } from '../order/order.component';
import { OrderDeliveryCheckComponent } from '../order-delivery-check/order-delivery-check.component';
import {OrderPaymentComponent} from "../order-payment/order-payment.component";
import { SendPaymentConfirmationComponent } from '../send-payment-confirmation/send-payment-confirmation.component';




@NgModule({
  declarations: [

    HomePageComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    BasketComponent,
    AppComponent,
    UserProfileComponent,
    CategoryComponent,
    CategoryListComponent,
    ItemPageComponent,
    RegistrationPageComponent,
    LoginPageComponent,
    FavPageComponent,
    OrderComponent,
    OrderDeliveryCheckComponent,
    OrderPaymentComponent,
    SendPaymentConfirmationComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    RouterLink,
    HttpClientModule,
    NgOptimizedImage,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
