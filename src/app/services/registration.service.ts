import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { firstValueFrom } from "rxjs";
import { environment } from "../environment";
import { RegistrationFormData, User } from "../types";

@Injectable({
  providedIn: "root",
})
export class RegistrationService {
  private baseUrl: string = environment.BASE_URL;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  public async register(formData: RegistrationFormData): Promise<User> {
    try {
      const result$ = this.http.post<User>(
        `${this.baseUrl}/registration`,
        formData
      );
      const response = await firstValueFrom(result$);
      this.router.navigate(["/"]);
      return response;
    } catch (error: unknown) {
      const typedError = error as HttpErrorResponse;
      if (typedError.error) throw typedError.error;
      return typedError.error;
    }
  }
}
