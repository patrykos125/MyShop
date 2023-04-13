import { Injectable, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../classes/User";

@Injectable({
    providedIn: 'root'
  })

export class UserService{

    constructor(private http: HttpClient) { }
    getUser(): Observable<User> {
        return this.http.get<User>("http://localhost:8080/user");
   }
   rejestreduser(){

   }
}
