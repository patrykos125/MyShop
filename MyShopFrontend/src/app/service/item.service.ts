import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Item} from "../classes/Item";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http:HttpClient) {
  }
  public getAllItems():Observable<Array<Item>>{
    return  this.http.get<Item[]>("http://localhost:8080/");

  }
  public getCategoryItem(category: string | null):Observable<Array<Item>>{

    return  this.http.get<Item[]>(`http://localhost:8080/${category?.toUpperCase()}`);

  }
}
