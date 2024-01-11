import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../services/account.service';
import { Login } from '../models/Login';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login: Login = {
    email: '',
    password: '',
  };

  invalidLogin: boolean = true;
  isUserValid: boolean = true;
  Message: string | undefined;
  loginError: boolean = false;
  error: string | undefined;

  constructor(private accountService: AccountService, private router: Router) { }

  jwtHelperService = new JwtHelperService();

  Login() {
    this.accountService.login(this.login).subscribe(
      (response) => {
        const token = (<any>response).token;
        localStorage.setItem("jwt", token);
        this.invalidLogin = false;
        this.router.navigate(["/category"])
      },
      (error) => {
        this.loginError = true;
        this.error = 'Invalid login or password !';
      });
  }

  setToken(token: string) {
    localStorage.setItem("access_token", token);
  }
}