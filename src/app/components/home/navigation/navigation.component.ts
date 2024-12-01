import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.css"],
  standalone: true,
  imports: [MatButtonModule]
})
export class NavigationComponent {

  public openRegistrationDialog() {
    console.log('registration');
  }

  public openLoginDialog() {
    console.log("login");
  }
}
