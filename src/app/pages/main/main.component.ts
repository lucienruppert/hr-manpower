import { Component } from "@angular/core";
import { AuthenticationService } from "../../services/authentication.service";
import { EmployerViewComponent } from "../../components/main/views/employer-view/employer-view.component";
import { HrProviderViewComponent } from "../../components/main/views/hr-provider-view/hr-provider-view.component";
import { AdminViewComponent } from "../../components/main/views/admin-view/admin-view.component";
import { SidebarComponent } from "../../components/main/sidebar/sidebar.component";

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
