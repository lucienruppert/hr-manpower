import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthenticationService } from '../../../services/authentication.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule, MatProgressSpinnerModule, NgIf],
})
export class LoginComponent {
  public email = '';
  public password = '';
  public errorMessage = '';
  public showSpinner = false;

  constructor(private authentication: AuthenticationService) {}

  public async submitForm(): Promise<void> {
    this.showSpinner = true;
    try {
      await this.authentication.login(this.email, this.password);
    } catch (error: unknown) {
      if (typeof error === 'string') {
        this.errorMessage = error;
      } else if (error instanceof Error) {
        this.errorMessage = error.message;
      } else {
        this.errorMessage = 'An unknown error occurred.';
      }
    }
    this.showSpinner = false;
  }
}
