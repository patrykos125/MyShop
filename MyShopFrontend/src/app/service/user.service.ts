import { Injectable, OnInit } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, map } from "rxjs";
import { User } from "../classes/User";
import { Router, RouterStateSnapshot } from "@angular/router";

@Injectable({
    providedIn: 'root'
  })

export class UserService{

  constructor(private http: HttpClient, private router:Router) { }
  isLogged: boolean = false;

    
  checkTokenValidity(): Observable<boolean> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `${sessionStorage.getItem('token')}`
      })
    };
    return this.http.get<boolean>('http://localhost:8080/api/auth', httpOptions);
  }
  
  checkSession(): void {
      if(sessionStorage.getItem('token')){
        this.isLogged = true;
      } else {
        this.isLogged = false;
      }
  }

  changePassword(oldPassword:string, newPassword: string):Observable<boolean>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `${sessionStorage.getItem('token')}`
      })
    };
    const body = { oldPassword, newPassword };
    return this.http.put<boolean>('http://localhost:8080/user/changePassword', body, httpOptions);
  }


  getUser(): Observable<User> {
    const userUrl = "http://localhost:8080/user";
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `${sessionStorage.getItem('token')}`
      })
    };
    return this.http.get<User>(userUrl, httpOptions);
   }
   
   getUserID(): Observable<number> {
    const userUrl = "http://localhost:8080/user/id";
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `${sessionStorage.getItem('token')}`
      })
    };
    return this.http.get<number>(userUrl, httpOptions);
  }

   canActivate(state: RouterStateSnapshot): Observable<boolean> {
    const url: any = state.url[0];
    return this.checkTokenValidity().pipe(map(isAuthenticated => {
      if(url.path === 'login' && isAuthenticated){
        this.router.navigate(['/']);
        return false;
      }
      if(url.path === 'user-profile' && !isAuthenticated){
        this.router.navigate(['/login']);
        return false;
      }
      return true;

    }));
  }

  logout(): any{
    sessionStorage.removeItem('token');
    this.router.navigate(['/']);
    this.checkSession();
 }

}
