import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { HomePageComponent } from './home-page/home-page.component';
import {HeaderComponent} from "./template/header/header.component";
import { NavComponent } from './template/nav/nav.component';
import { FooterComponent } from './template/footer/footer.component';
import { BasketComponent } from './basket/basket.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterLink, RouterOutlet} from "@angular/router";
import { AppComponent } from './app.component';


@NgModule({
  declarations: [

    HomePageComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    BasketComponent,
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    RouterLink
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
