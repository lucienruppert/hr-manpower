import { Component } from "@angular/core";
import { AuthenticationService } from "../../services/authentication.service";
import { EmployerViewComponent } from "../../components/views/employer-view/employer-view.component";
import { HrProviderViewComponent } from "../../components/views/hr-provider-view/hr-provider-view.component";
import { AdminViewComponent } from "../../components/views/admin-view/admin-view.component";
import { SidebarComponent } from "../../components/sidebar/sidebar.component";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"],
  standalone: true,
  imports: [
    EmployerViewComponent,
    HrProviderViewComponent,
    AdminViewComponent,
    SidebarComponent,
  ],
})
export class MainComponent {
  public userRole = "";

  constructor(private authentication: AuthenticationService) {
    this.authentication.userRole$.subscribe(
      (userRole) => (this.userRole = userRole)
    );
  }
}
