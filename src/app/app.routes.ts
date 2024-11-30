import { Routes } from "@angular/router";
import { MainComponent } from "./pages/main/main.component";
import { GeneralRouteGuardService } from "./services/general-route-guard.service";
import { AuthRedirectGuardService } from "./services/auth-redirect-guard.service";
import { HomeComponent } from "./pages/home/home.component";
import { EmployerViewComponent } from "./components/views/employer-view/employer-view.component";
import { HrProviderViewComponent } from "./components/views/hr-provider-view/hr-provider-view.component";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    canActivate: [AuthRedirectGuardService],
  },
  {
    path: "main",
    component: MainComponent,
    canActivate: [GeneralRouteGuardService],
    children: [
      {
        path: "employer-view",
        component: EmployerViewComponent,
      },
      {
        path: "provider-view",
        component: HrProviderViewComponent,
      },
    ],
  },
  { path: "**", redirectTo: "", pathMatch: "full" },
];
