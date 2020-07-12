import { AuthGuardService } from './auth-guard.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';


@Injectable()
export class AuthGuardComponent implements CanActivate {
  public authToken;
  private isAuthenticated = true; // Set this value dynamically

  constructor(private router: Router, public auth: AuthGuardService) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.isAuthenticated = this.auth.isLoggedIn() ? true : false;
    if (this.isAuthenticated) {
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
}
