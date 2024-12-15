import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpRequestService } from '../../service/http-request.service';

@Component({
  selector: 'app-login',
  imports: [MatIconModule, MatButtonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private httpRequest: HttpRequestService) {}

  onSubmit() {
    const loginData = this.loginForm.value;
    console.log('Login Data:', loginData);
    this.httpRequest.postLogin(loginData).subscribe(
      (response) => {
        console.log('Login response:', response);
      },
      (error) => {
        console.error('Login error:', error);
      }
    );
  }
}
