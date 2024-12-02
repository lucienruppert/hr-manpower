import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgIf } from "@angular/common";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { DialogRef } from "@angular/cdk/dialog";
import { RegistrationFormData } from "../../../types";


@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"],
  standalone: true,
  imports: [FormsModule, MatProgressSpinnerModule, NgIf],
})
export class RegistrationComponent implements OnInit {
  public formData: RegistrationFormData = {
    company: "",
    companyType: "",
    companyRole: "",
    email: "",
    password: "",
    phone: "",
    contactPerson: "",
    contactPersonPosition: "",
  };
  public errorMessage = "";
  public showSpinner = false;
  public isDialogReady = false;

  constructor(
    public dialogRef: DialogRef
  ) {}

  ngOnInit() {
    setTimeout(() => {
      this.isDialogReady = true;
    }, 0);
  }

  public async submitForm(): Promise<void> {
    this.showSpinner = true;
    try {
      const jsonData = JSON.stringify(this.formData);
      console.log(jsonData);
    } catch (error: unknown) {
      if (typeof error === "string") {
        this.errorMessage = error;
      } else if (error instanceof Error) {
        this.errorMessage = error.message;
      } else {
        this.errorMessage = "An unknown error occurred.";
      }
    }
    this.showSpinner = false;
  }
}
