import { AuthenticationService } from "../../services/authentication.service";
import { Component, OnDestroy } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
  standalone: true,
  imports: [MatButtonModule],
})
export class SidebarComponent implements OnDestroy {
  public userRole = "";
  private destroy$ = new Subject<void>();

  constructor(
    private authentication: AuthenticationService,
    private router: Router
  ) {
    this.authentication.userRole$
      .pipe(takeUntil(this.destroy$))
      .subscribe((userRole) => (this.userRole = userRole));
  }

  public logout(): void {
    this.authentication.logout();
  }

  public navigateTo(route: string): void {
    this.router.navigate([`/main/${route}`]);
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
