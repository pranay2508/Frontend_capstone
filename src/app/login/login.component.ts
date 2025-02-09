
import { Component } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginData = {
    email: '',
    password: ''
  };

  onSubmit() {
    if (this.loginData.email && this.loginData.password) {
      console.log('Login attempted:', this.loginData);
    }
  }
}
