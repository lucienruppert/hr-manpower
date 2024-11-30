import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { BehaviorSubject, firstValueFrom } from "rxjs";
import { environment } from "../environment";
import { User } from "../types";

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  public isLoggedIn$ = new BehaviorSubject<boolean>(false);
  public userRole$ = new BehaviorSubject<string>("");
  private baseUrl: string = environment.BASE_URL;
  private readonly EMAIL_KEY = "hr_email";

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    const storedEmail = localStorage.getItem(this.EMAIL_KEY);
    if (storedEmail) {
      this.isLoggedIn$.next(true);
    }
  }

  public async login(email: string, password: string): Promise<User> {
    const formData = this.getFormData(email, password);
    try {
      const result$ = this.http.post<User>(`${this.baseUrl}/login`, formData);
      const userData = await firstValueFrom(result$);

      localStorage.setItem(this.EMAIL_KEY, userData.email);
      this.isLoggedIn$.next(true);
      this.userRole$.next(userData.role);

      this.router.navigate(["/main"]);
      return userData;
    } catch (error: unknown) {
      if (error instanceof HttpErrorResponse && error.error?.errors) {
        throw error.error.errors.join(" ");
      }
      throw new Error("An unexpected error occurred during login");
    }
  }

  private getFormData(email: string, password: string): FormData {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    return formData;
  }

  public logout(): void {
    this.logoutOnClient();
    this.logoutOnServer();
    this.router.navigate(["/"]);
  }

  private logoutOnClient(): void {
    this.isLoggedIn$.next(false);
    this.userRole$.next("");
    localStorage.removeItem(this.EMAIL_KEY);
  }

  private async logoutOnServer(): Promise<void> {
    try {
      const result$ = this.http.post(`${this.baseUrl}/logout`, {});
      await firstValueFrom(result$);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  }

  public getUserEmail(): string | null {
    return localStorage.getItem(this.EMAIL_KEY);
  }
}
