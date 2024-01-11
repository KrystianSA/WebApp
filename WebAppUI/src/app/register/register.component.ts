import { Component } from '@angular/core';
import { RegisterUser } from '../models/Register';
import { AccountService } from '../services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerUser: RegisterUser = {
    name: '',
    surname: '',
    email: '',
    password: '',
    phoneNumber: 0,
    dateOfBirth: ''
  };

  isError: boolean = false;
  errorMessage: string | undefined

  constructor(private accountService: AccountService, private router: Router) { }

  Register() {
    this.accountService.register(this.registerUser).subscribe(
      () => {
        this.router.navigate(['/login']);
      },
      (error) => {
        this.isError = true;
        this.errorMessage = "Invalid data"
      }
    );
  }
}
