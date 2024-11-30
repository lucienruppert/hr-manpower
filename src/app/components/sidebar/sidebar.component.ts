import { AuthenticationService } from "../../services/authentication.service";
import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { Router } from "@angular/router";

@Component({
  selector: "sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
  standalone: true,
  imports: [MatButtonModule],
})
export class SidebarComponent {
  public userRole: string = "";

  constructor(
    private authentication: AuthenticationService,
    private router: Router
  ) {
    this.authentication.userRole$.subscribe(
      (userRole) => (this.userRole = userRole)
    );
  }

  public logout(): void {
    this.authentication.logout();
  }

  public navigateTo(route: string): void {
    this.router.navigate([`/main/${route}`]);
  }
}
