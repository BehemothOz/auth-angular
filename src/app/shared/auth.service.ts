import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  private _registerURl = 'http://localhost:3344/api/register';
  private _loginURl = 'http://localhost:3344/api/login';

  constructor(private http: HttpClient, private _router: Router) {}

  registerUser(user) {
    return this.http.post<any>(this._registerURl, user);
  }

  loginUser(user) {
    return this.http.post<any>(this._loginURl, user);
  }

  loggedIn() {
    return !!localStorage.getItem(`token`);
  }

  getToken() {
    return localStorage.getItem(`token`);
  }

  logoutUser() {
    localStorage.removeItem(`token`);
    this._router.navigate([`/events`]);
  }
}
