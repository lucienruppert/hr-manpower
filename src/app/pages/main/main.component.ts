import { NavigationComponent } from "./../../components/navigation/navigation.component";
import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../../services/authentication.service";
import { EmployerViewComponent } from "../../components/employerView/employerView.component";
import { HrProviderViewComponent } from "../../components/hrProviderView/hrProviderView.component";
import { NgIf } from "@angular/common";

@Component({
  selector: "main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"],
  standalone: true,
  imports: [
    NavigationComponent,
    EmployerViewComponent,
    HrProviderViewComponent,
    NgIf
  ],
})
export class MainComponent implements OnInit {
  public isEmployer: boolean = false;
  public isProvider: boolean = false;

  constructor(private authentication: AuthenticationService) {}

  public ngOnInit(): void {
    this.authentication.isEmployer$.subscribe(
      (isEmployer) => (this.isEmployer = isEmployer)
    );
    this.authentication.isProvider$.subscribe(
      (isProvider) => (this.isProvider = isProvider)
    );
  }
}
