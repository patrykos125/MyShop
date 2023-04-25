import { Component } from '@angular/core';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private userService: UserService){
    this.userService.checkSession();
}
}
