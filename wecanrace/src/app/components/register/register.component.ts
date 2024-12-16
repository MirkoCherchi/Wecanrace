import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpRequestService } from '../../service/http-request.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule, 
    MatButtonModule, 
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    lastname: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    repassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  constructor(private httpRequest: HttpRequestService) {}
private _snackBar = inject(MatSnackBar);
 
  onSubmit() {
    const formData = this.registerForm.value;
    if (formData.password !== formData.repassword) {
      console.error('Le password non coincidono!');
      return;
    }

    console.log('Dati di registrazione:', formData);

   
    this.httpRequest.postRegister(formData).subscribe({
      next: (response) => {
        console.log('Registrazione avvenuta con successo:', response);
        this.openSnackBar(response, 'Close');
      },
      error: (error) => {
        console.error('Errore nella registrazione:', error);
        this.openSnackBar({message: 'Register failed'}, 'Close');
      },
      complete: () => {
        this.registerForm.reset(); 
      },
    });
  }
  openSnackBar(response: any, action: string) {
    this._snackBar.open(response.message, action);
  }
}