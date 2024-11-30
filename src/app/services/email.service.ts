import { AuthenticationService } from "./authentication.service";
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { firstValueFrom } from "rxjs";
import { environment } from "../environment";
import { EmailSendingResult } from "../types";

@Injectable({
  providedIn: "root",
})
export class EmailService {
  private readonly baseUrl: string = environment.BASE_URL;
  private readonly PROJECT_ID = "1";
  private readonly PROJECT_NAME = "hr";

  constructor(
    private http: HttpClient,
    private authentication: AuthenticationService
  ) {}

  public async addEmail(email: string): Promise<string> {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("owner", this.PROJECT_ID);
    formData.append("project", this.PROJECT_NAME);

    try {
      const result$ = this.http.post<string>(
        `${this.baseUrl}/email/add`,
        formData
      );
      return await firstValueFrom(result$);
    } catch (error: unknown) {
      if (error instanceof HttpErrorResponse && error.error?.errors) {
        throw error.error.errors;
      }
      throw new Error("An unexpected error occurred while adding email");
    }
  }

  public async sendEmail(): Promise<EmailSendingResult> {
    const email = this.authentication.getUserEmail();
    if (!email) {
      throw new Error("No user email found");
    }

    try {
      const result$ = this.http.post<EmailSendingResult>(
        `${this.baseUrl}/email/send`,
        { email }
      );
      return await firstValueFrom(result$);
    } catch (error: unknown) {
      if (error instanceof HttpErrorResponse && error.error?.errors) {
        throw error.error.errors;
      }
      throw new Error("An unexpected error occurred while sending email");
    }
  }
}
