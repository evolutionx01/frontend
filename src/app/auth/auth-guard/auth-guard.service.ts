import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthGuardService {

  constructor(
   // private apiService: ApiService,
  ) { }

  // tslint:disable-next-line: ban-types
  isLoggedIn(): Boolean  {
   const helper = new JwtHelperService();
   const token = sessionStorage.getItem('token');
   const tokenExpired = helper.isTokenExpired(token) ? true : false;
   return (token && !tokenExpired) ? true : false;
  }

}
