import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent implements OnInit{


  constructor(private http:HttpClient) {
  }

  ngOnInit(): void {
    this.lockCompanyField();
    
  }
  public onSubmit(data:any){
    this.http.post('http://localhost:8080/registration',data).subscribe((response)=>{

    })

  }


  private lockCompanyField() {
    const companyCheck = document.getElementById("companyCheck") as HTMLInputElement;
    const nipField = document.getElementById("nip") as HTMLInputElement;

    companyCheck.addEventListener("change", () => {
      if (companyCheck.checked) {
        nipField.removeAttribute("disabled");
      } else {
        nipField.setAttribute("disabled", "true");
      }
    });
  }
}
