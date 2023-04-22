import {Component, ViewChild} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse, HttpStatusCode} from "@angular/common/http";
import {SessionDto} from "../classes/SessionDto";
import {Router} from "@angular/router";
import {catchError, throwError} from "rxjs";
import {UserLoginDto} from "../classes/UserLoginDto";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  sessionKey :string | undefined ="";
  alert:string="";



  constructor(private http:HttpClient ,private  router:Router   ) {

  }

  ngOnInit(): void {


  }

  public onSubmit(user:UserLoginDto){

    this.http.post<HttpResponse<SessionDto>>('http://localhost:8080/login',user)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === HttpStatusCode.Unauthorized) {

            this.alert="Nie poprawne dane logowania"

          }
          return throwError(()=>error);
        })
      )
      .subscribe((response)=>{

      if (response){
        this.sessionKey =response.body?.sessionKey

        if (typeof this.sessionKey === "string") {
          sessionStorage.setItem(
            'token',
            this.sessionKey
          );
        }

        this.router.navigate(['/']);

      }
      })
  }
  validData(user:UserLoginDto)  {
    const email = user.email;
    const password = user.password;

    const emailControl = new FormControl(email, [
      Validators.required,
      Validators.email,
    ]);

    const passwordControl = new FormControl(password,
      [Validators.required,
        Validators.minLength(3)
      ]);

    if (emailControl.invalid) {
      this.alert="Nie prawidłowy adres email";
    }

    else if (passwordControl.invalid) {
      this.alert="Hasło musi zawierać co najmiej 3 znaki"
    }
    else {
      this.onSubmit(user);
    }


  }

   hideAlertLabel(){
    this.alert="";

   }



}
