import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgIf } from "@angular/common";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { DialogRef } from "@angular/cdk/dialog";
import { ErrorResponse, RegistrationFormData } from "../../../types";
import { RegistrationService } from "../../../services/registration.service";
import { SnackBarService } from "../../../services/snackbar.service";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { CommonModule } from "@angular/common";
import { NgForm } from '@angular/forms';

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"],
  standalone: true,
  imports: [FormsModule, MatProgressSpinnerModule, NgIf, MatSnackBarModule, CommonModule],
})
export class RegistrationComponent implements OnInit {
  public formData: RegistrationFormData = {
    company: "",
    companyType: "company",
    companyRole: "employer",
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
    public dialogRef: DialogRef,
    public registration: RegistrationService,
    private snackbar: SnackBarService
  ) {}

  ngOnInit() {
    setTimeout(() => {
      this.isDialogReady = true;
    }, 200);
  }

  public async submitForm(form: NgForm): Promise<void> {
    if (form.valid) {
      this.showSpinner = true;
      try {
        await this.registration.register(this.formData);
        this.snackbar.showSnackBar("Regisztrációd sikerült.");
        this.dialogRef.close();
      } catch (error: unknown) {
        if (error instanceof Object && "status" in error) {
          this.errorMessage = (error as ErrorResponse)["status"];
        } else if (typeof error === "string") {
          this.errorMessage = error;
        } else if (error instanceof Error) {
          this.errorMessage = error.message;
        } else {
          this.errorMessage = "Ismeretlen hiba történt.";
        }
      }
      this.showSpinner = false;
    }
  }
}
