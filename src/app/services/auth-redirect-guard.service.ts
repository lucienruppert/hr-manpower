import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthRedirectGuardService {
  constructor(
    private authentication: AuthenticationService,
    private router: Router,
  ) {}

  public canActivate(): boolean | Promise<boolean> {
    const userEmail = this.authentication.getUserEmail();
    if (userEmail) {
      this.router.navigate(['/main']);
      return false;
    }
    return true;
  }
}
