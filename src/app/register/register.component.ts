import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class RegisterComponent {
  user = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'jobseeker'
  };

  onSubmit() {
    if (this.user.password !== this.user.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Form submitted:', this.user);
  }
}
