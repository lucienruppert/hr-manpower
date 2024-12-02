import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgIf } from "@angular/common";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { AuthenticationService } from "../../../services/authentication.service";
import { DialogRef } from "@angular/cdk/dialog";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"],
  standalone: true,
  imports: [FormsModule, MatProgressSpinnerModule, NgIf],
})
export class RegistrationComponent implements OnInit {
  public email = "";
  public password = "";
  public errorMessage = "";
  public showSpinner = false;
  public isDialogReady = false;

  constructor(
    private authentication: AuthenticationService,
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
      await this.authentication.login(this.email, this.password);
      this.dialogRef.close();
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
