import { Component } from '@angular/core';
import { RegisterUser } from '../models/Register';
import { AccountService } from '../services/account.service';

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
  
  message : string | undefined

  constructor(private accountService: AccountService){}

  Register(){
    this.accountService.register(this.registerUser).subscribe(()=>{
      this.message = "Zarejestrowano użytkownika"
  });
}
}
