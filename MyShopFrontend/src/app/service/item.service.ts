import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpStatusCode} from "@angular/common/http";
import {Observable} from "rxjs";
import {Item} from "../classes/Item";
import { CommentItem } from '../classes/Comment';

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

    return  this.http.get<Item[]>(`http://localhost:8080/${category}`);

  }

  public getItem(id: number | null):Observable<Item>{
    return  this.http.get<Item>(`http://localhost:8080/item/${id}`);
  }

  public addComment(comment: CommentItem, itemId: number): Observable<CommentItem> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `${sessionStorage.getItem('token')}` });
    const url = `http://localhost:8080/api/comment/${itemId}`;
    return this.http.post<CommentItem>(url, comment, { headers });
  }
  public addItem(item :Item):Observable<HttpStatusCode>  {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `${sessionStorage.getItem('token')}` });
    const url = `http://localhost:8080/admin-panel/add-item`;
    console.log(item);
    let httpStatusCodeObservable = this.http.post<HttpStatusCode>(url, item, { headers });
    httpStatusCodeObservable.subscribe((x)=>{

    });
    return httpStatusCodeObservable;
  }



}
