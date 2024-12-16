import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpRequestService } from '../../service/http-request.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  imports: [MatIconModule, MatButtonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})

export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  private _snackBar = inject(MatSnackBar);

  constructor(private httpRequest: HttpRequestService) {}

  onSubmit() {
    const loginData = this.loginForm.value;
    this.httpRequest.postLogin(loginData).subscribe({
      next: (response) => {
        console.log('Login response:', response);
        this.openSnackBar(response, 'Close');
        
      },
      error: (error) => {
        console.error('Login error:', error);
        this.openSnackBar({message: 'Login failed'}, 'Close');
      },
      complete: () => {
        this.loginForm.reset();
      },
    });
  }
  openSnackBar(response: any, action: string) {
    this._snackBar.open(response.message, action);
  }
}
