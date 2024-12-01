import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { Dialog } from "@angular/cdk/dialog";
import { RegistrationComponent } from "../Registration/Registration.component";
import { LoginComponent } from "../login/login.component";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.css"],
  standalone: true,
  imports: [MatButtonModule],
})
export class NavigationComponent {
  constructor(private dialog: Dialog) {}

  public openRegistrationDialog() {
    this.dialog.open(RegistrationComponent);
  }

  public openLoginDialog() {
    this.dialog.open(LoginComponent);
  }
}
