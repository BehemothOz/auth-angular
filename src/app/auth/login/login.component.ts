import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service'
import { Router } from '@angular/router';
import { ClrLoadingState } from '@clr/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {};
  authError;
  sendBtnState: ClrLoadingState = ClrLoadingState.DEFAULT;

  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit() {
  }

  loginUser() {
    this.sendBtnState = ClrLoadingState.LOADING;
    this._auth.loginUser(this.loginUserData).subscribe(
      res => {
        localStorage.setItem(`token`, res.token);
        this._router.navigate([`/special`]);
        this.sendBtnState = ClrLoadingState.SUCCESS;
      },
      err => {
        this.authError = true;
        this.sendBtnState = ClrLoadingState.DEFAULT;
      }
    )
  }
}
