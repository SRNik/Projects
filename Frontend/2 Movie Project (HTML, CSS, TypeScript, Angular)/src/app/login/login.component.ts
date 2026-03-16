import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = '';
  password: string = '';
  errorMsg: string = '';

  constructor(private authservice: AuthService, private router: Router) {

  }

  login() {
    if (this.username.trim().length === 0 && this.password.trim().length === 0) {
      this.errorMsg = "Please type in a valid username and password"
    } else if (this.username.trim().length === 0) {
      this.errorMsg = "Please type in a valid username"
    }
    else if (this.password.trim().length === 0) {
      this.errorMsg = "Please type in a valid password"
    } else {
      this.errorMsg = ''; //Refresh the error message when success first time or retrying
      let res = this.authservice.login(this.username, this.password)
      if (res === 200) {
        this.router.navigate(['home'])
        this.onSubmit()
      } else if (res === 403) {
        this.errorMsg = "Please type in a valid username and/or password";
      }
    }
  }

  onSubmit() {

  }
}
