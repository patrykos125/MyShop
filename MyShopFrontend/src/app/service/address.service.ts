import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpStatusCode} from "@angular/common/http";
import {Router} from "@angular/router";
import {AddressDto} from "../classes/AddressDto";
import {Observable} from "rxjs";
import {Item} from "../classes/Item";
import {Order} from "../classes/Order";

@Injectable({
  providedIn: 'root'
})
export class AddressService {


  constructor(private http: HttpClient, private router:Router) { }

  public saveAddress(addressDto:AddressDto):Observable<HttpStatusCode>  {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `${sessionStorage.getItem('token')}` });
    const url = `http://localhost:8080/api/address`;

    let httpStatusCodeObservable = this.http.put<HttpStatusCode>(url, addressDto, { headers });
    httpStatusCodeObservable.subscribe((x)=>{

    });

    return httpStatusCodeObservable;
  }
  public getAddress():Observable<AddressDto[]>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `${sessionStorage.getItem('token')}`
      })
    };
    return this.http.get<AddressDto[]>('http://localhost:8080/api/address', httpOptions);
  }


}
