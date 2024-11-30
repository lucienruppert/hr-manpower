import { NavigationComponent } from "./../../components/navigation/navigation.component";
import { Component } from "@angular/core";
import { AuthenticationService } from "../../services/authentication.service";
import { EmployerViewComponent } from "../../components/views/employer-view/employer-view.component";
import { HrProviderViewComponent } from "../../components/views/hr-provider-view/hr-provider-view.component";
import { AdminViewComponent } from "../../components/views/admin-view/admin-view.component";

@Component({
  selector: "main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"],
  standalone: true,
  imports: [
    NavigationComponent,
    EmployerViewComponent,
    HrProviderViewComponent,
    AdminViewComponent,
  ],
})
export class MainComponent {
  public userRole: string = "";

  constructor(private authentication: AuthenticationService) {
    this.authentication.userRole$.subscribe(
      (userRole) => (this.userRole = userRole)
    );
  }
}
