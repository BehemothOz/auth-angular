import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { Router } from '@angular/router';
import { ClrLoadingState } from '@clr/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerUserData = {
    email: '',
    password: '',
    repeatPassword: ''
  };

  registerError: boolean;

  registerBtnState: ClrLoadingState = ClrLoadingState.DEFAULT;

  constructor(private _auth: AuthService, private _router: Router) {}

  ngOnInit() {}

  registerUser() {
    const data = {
      email: this.registerUserData.email,
      password: this.registerUserData.password
    };

    this.registerBtnState = ClrLoadingState.LOADING;

    this._auth.registerUser(data).subscribe(
      res => {
        localStorage.setItem('token', res.token);
        this._router.navigate([`/special`]);
        this.registerBtnState = ClrLoadingState.SUCCESS;
      },
      err => {
        this.registerError = true;
        this.registerBtnState = ClrLoadingState.DEFAULT;
      }
    );
  }
}
