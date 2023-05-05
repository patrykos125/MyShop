import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpStatusCode} from "@angular/common/http";
import {UserRegistrationDto} from "../classes/UserRegistrationDto";
import {FormControl, Validators} from "@angular/forms";
import {catchError, throwError} from "rxjs";
import {Router} from "@angular/router";


@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit{

  @ViewChild('nip') nipInput!: ElementRef<HTMLInputElement>;
  @ViewChild('company') isCompany!: ElementRef<HTMLInputElement>;
  @ViewChild('confirmPassword') confirmPassword!: ElementRef<HTMLInputElement>;
  fistNameAlert:string ="";
  surnameAlert: string = "";
  zipCodeAlert: string = "";
  cityAlert: string = "";
  streetAlert: string = "";
  houseNumberAlert: string = "";
  phoneNumberAlert: string = "";
  emailAlert: string = "";
  nipAlert: string = "";
  passwordAlert: string = "";
  confirmPasswordAlert: string = "";
  emailTaken: string = "";
  registerButtonText: string = "Zarejestruj się";


  constructor(private http:HttpClient, private router:Router) {
  }

  ngOnInit(): void {
    this.lockCompanyField();

  }
  public onSubmit(data:any){
    this.http.post('http://localhost:8080/registration',data).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === HttpStatusCode.Conflict) {

          this.emailTaken="Podany email wystepuje juz w systemie"

        }
        return throwError(()=>error);
      })
    )
      .subscribe((response)=>{
        this.registerButtonText="Zarejestrowano"
        const registerButton = document.getElementById("registerButton") as HTMLInputElement;
        registerButton.setAttribute("disabled","true");


        setTimeout(()=>{
          this.router.navigate(['login'])
        },1000)


    });

  }
  public validData(user:UserRegistrationDto){

    user.nip= this.nipInput.nativeElement.value.toString();
    //
    this.fistNameAlert="";
    const firstNameControl = new FormControl(user.firstName, [
      Validators.required,
      Validators.minLength(2),
    ]);
    if(firstNameControl.invalid){
      this.fistNameAlert="Pole imie musi zawierać co najmiej 2 znaki"

    }
    //
    this.surnameAlert="";
    const surnameNameControl = new FormControl(user.surname, [
      Validators.required,
      Validators.minLength(2),
    ]);
    if(surnameNameControl.invalid){
      this.surnameAlert="Pole nazwisko musi zawierać co najmiej 2 znaki"
    }
    //
    this.zipCodeAlert="";
     const zipCodeControl = new FormControl(user.zipCode, [
      Validators.required,
      Validators.pattern(/^[0-9]{2}-[0-9]{3}$/)
    ]);
    if(  zipCodeControl.invalid){
      this.zipCodeAlert="Nie prawidłowy kod pocztowy"
    }
    //
    this.cityAlert="";
    const cityControl = new FormControl(user.city, [
      Validators.required,
      Validators.minLength(2)
    ]);
    if(cityControl.invalid){
      this.cityAlert="Pole miasto musi zawierać co najmiej 2 znaki"
    }
    //
    this.streetAlert="";
    const streetControl = new FormControl(user.street, [
      Validators.required,
      Validators.minLength(2)
    ]);
    if(streetControl.invalid){
      this.streetAlert="Pole ulica musi zawierać co najmiej 2 znaki"
    }
    //
    this.houseNumberAlert="";
    const houseNumberControl = new FormControl(user.houseNumber, [
      Validators.required,
      Validators.minLength(1)
    ]);
    if(houseNumberControl.invalid){
      this.houseNumberAlert="Pole numer doumu nie może być puste "
    }
    //
    this.phoneNumberAlert="";
    const phoneNumberControl = new FormControl(user.phoneNumber, [
      Validators.required,
      Validators.pattern(/^(\+48)? ?[1-9]\d{2} ?\d{3} ?\d{3}$/)
    ]);
    if(phoneNumberControl.invalid){
      this.phoneNumberAlert="Nie prawidłowy numer telefonu"
    }
    //
    this.emailAlert="";
    const emailAlertControl = new FormControl(user.email, [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}")
    ]);
    if(emailAlertControl.invalid){
      this.emailAlert="Nie prawidłowy adres email"
    }
    //
    this.nipAlert="";
    let nipControl= new FormControl();
    if(this.isCompany.nativeElement.checked) {
       nipControl = new FormControl(user.nip, [
       Validators.required,
        Validators.pattern(/^[0-9]{10}$/)

      ]);
      if (nipControl.invalid) {
        this.nipAlert = "Nie prawidłowy nip"
      }
    }
    //
    this.passwordAlert="";
    const passwordControl = new FormControl(user.password, [
      Validators.required,
      Validators.minLength(8)
    ]);
    if(passwordControl.invalid){
      this.passwordAlert="Hasło musi zawierać co najmniej  8 znaków"
    }
    //
    this.confirmPasswordAlert="";

    let passwordsAreSame = user.password.toString() === this.confirmPassword.nativeElement.value.toString();
    if(!passwordsAreSame){
      this.confirmPasswordAlert="Hasła nie sa takie same"

      }

    if(firstNameControl.valid &&
      surnameNameControl.valid &&
      zipCodeControl.valid &&
      cityControl.valid &&
      streetControl.valid &&
      houseNumberControl.valid &&
      phoneNumberControl.valid &&
      emailAlertControl.valid &&
       nipControl.valid &&
      passwordControl.valid &&
      passwordsAreSame

        ){
      this.onSubmit(user);
    }

  }


  private lockCompanyField() {
    const companyCheck = document.getElementById("companyCheck") as HTMLInputElement;
    const nipField = document.getElementById("nip") as HTMLInputElement;

    companyCheck.addEventListener("change", () => {
      if (companyCheck.checked) {
        nipField.removeAttribute("disabled");
      } else {
        nipField.value="";
        nipField.setAttribute("disabled", "true");
      }
    });
  }
}
